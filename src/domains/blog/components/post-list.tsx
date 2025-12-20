export const PostList = () => {
  const posts = [
    { id: 1, title: "getting started with next.js 15", date: "2025-11-20" },
    { id: 2, title: "infrastructure security best practices", date: "2025-11-18" }
  ];

  return (
    <section className="py-20 px-4 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold lowercase mb-10">blog posts</h2>
      <div className="space-y-8">
        {posts.map((post) => (
          <article key={post.id} className="group cursor-pointer">
            <p className="text-sm text-gray-500 mb-1">{post.date}</p>
            <h3 className="text-xl font-semibold group-hover:text-blue-600 transition-colors lowercase">
              {post.title}
            </h3>
          </article>
        ))}
      </div>
    </section>
  );
};
