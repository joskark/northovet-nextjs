import Link from "next/link";

const posts = [
  {
    slug: "post-1",
    title: "Ρήξη Πρόσθιου Χιαστού Συνδέσμου (TPLO, CCWO, LSS)",
  },
  { slug: "post-2", title: "Κατάγματα Άκρων - Ενδοαρθρικά κατάγματα" },
  { slug: "post-3", title: "Εξαρθρήματα Aρθρώσεων" },
  { slug: "post-4", title: "Εξάρθρημα Επιγονατίδας" },
];

export default function PostsList() {
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
