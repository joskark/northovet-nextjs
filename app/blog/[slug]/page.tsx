import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

type Params = Promise<{ slug: string }>;

// Define the path to the posts directory
const postsDirectory = path.join(process.cwd(), "content/posts");

// Function to generate static params for dynamic routes
export function generateStaticParams() {
  // Read all Markdown files in the posts directory
  const fileNames = fs.readdirSync(postsDirectory);

  // Map each file name to a parameter object containing the slug
  return fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, ""); // Remove the .md extension to get the slug
    return { slug }; // Return an object with the slug property
  });
}

export default async function Post({ params }: { params: Params }) {
  const { slug } = await params;

  // Path to the Markdown file
  const postFilePath = path.join(postsDirectory, `${slug}.md`);

  // Check if the file exists
  if (!fs.existsSync(postFilePath)) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl font-semibold text-red-500">Post not found</p>
      </div>
    );
  }

  // Read and parse the Markdown file
  const fileContents = fs.readFileSync(postFilePath, "utf-8");
  const { data, content } = matter(fileContents);

  // Convert Markdown content to HTML
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 bg-white shadow-lg rounded-lg mt-10">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">{data.title}</h1>
      <div
        className="prose prose-lg max-w-6xl text-gray-600 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
    </div>
  );
}
