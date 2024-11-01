import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

// Define the path to the posts directory
const postsDirectory = path.join(process.cwd(), "content/posts");

// Fetch all posts by reading the Markdown files
function getPosts() {
  const fileNames = fs.readdirSync(postsDirectory);

  const posts = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, ""); // Remove the .md extension to get the slug
    const filePath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(filePath, "utf-8");

    const { data } = matter(fileContents); // Parse the front matter
    const title = data.title;
    const date = data.date;

    return { slug, title, date };
  });

  // Sort posts by date in descending order
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

// Function to generate static params for dynamic routes
export function generateStaticParams() {
  const posts = getPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Main component for listing posts
export default function PostsList() {
  const posts = getPosts();

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-semibold text-gray-800 text-center mb-6">
        Χρήσιμα άρθρα
      </h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.slug} className="text-center">
            <Link
              href={`/blog/${post.slug}`}
              className="text-lg text-blue-600 font-medium hover:underline hover:text-blue-800 transition"
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
