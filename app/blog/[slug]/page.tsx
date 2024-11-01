import { posts } from "../data";

export default async function Post({ params }: { params: { slug: string } }) {
  // Extract the slug from params
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  // Handle case when post is not found
  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl font-semibold text-red-500">Post not found</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 bg-white shadow-lg rounded-lg mt-10">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">{post.title}</h1>
      <p className="text-gray-600 leading-relaxed text-lg">{post.content}</p>
    </div>
  );
}
