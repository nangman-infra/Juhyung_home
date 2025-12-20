export const ContactForm = () => {
  return (
    <section className="py-20 px-4 max-w-xl mx-auto">
      <h2 className="text-3xl font-bold lowercase mb-10">contact me</h2>
      <form className="space-y-6">
        <div>
          <label className="block text-sm font-medium lowercase mb-2">email</label>
          <input type="email" className="w-full p-3 border rounded-lg focus:outline-blue-500" placeholder="your@email.com" />
        </div>
        <div>
          <label className="block text-sm font-medium lowercase mb-2">message</label>
          <textarea className="w-full p-3 border rounded-lg h-32 focus:outline-blue-500" placeholder="hello..."></textarea>
        </div>
        <button type="button" className="w-full py-3 bg-black text-white rounded-lg lowercase hover:bg-gray-800 transition-colors">
          send message
        </button>
      </form>
    </section>
  );
};
