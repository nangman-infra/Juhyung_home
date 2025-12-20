export const ProjectList = () => {
  const projects = [
    { title: "security monitoring system", desc: "real-time threat detection system" },
    { title: "cloud migration project", desc: "moving legacy infrastructure to aws" }
  ];

  return (
    <section className="py-20 px-4 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold lowercase mb-10">projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <div key={i} className="border p-6 rounded-xl hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold lowercase mb-2">{p.title}</h3>
            <p className="text-gray-600 text-sm lowercase mb-4">{p.desc}</p>
            <button className="text-blue-600 text-sm font-medium lowercase">view detail →</button>
          </div>
        ))}
      </div>
    </section>
  );
};
