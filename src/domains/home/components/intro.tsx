export const Intro = () => {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold lowercase mb-6">
          infrastructure & security engineer
        </h1>
        <p className="text-xl text-gray-600 mb-8 lowercase">
          building secure and scalable systems
        </p>
        <div className="flex justify-center gap-4">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg lowercase hover:bg-blue-700 transition-colors">
            view projects
          </button>
          <button className="px-6 py-3 border border-gray-300 rounded-lg lowercase hover:bg-gray-50 transition-colors">
            contact me
          </button>
        </div>
      </div>
    </section>
  );
};
