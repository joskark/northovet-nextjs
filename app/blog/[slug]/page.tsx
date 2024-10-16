import { posts } from "../data";
export default function Post({ params }: { params: { slug: string } }) {
  // Find the post based on the slug
  const post = posts.find((p) => p.slug === params.slug);

  // If the post is not found, you can handle it gracefully
  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
