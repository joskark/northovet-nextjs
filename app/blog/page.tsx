import Link from "next/link";

const posts = [
  { slug: "post-1", title: "Post 1" },
  { slug: "post-2", title: "Post 2" },
  { slug: "post-3", title: "Post 3" },
];

export default function PostsList() {
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
