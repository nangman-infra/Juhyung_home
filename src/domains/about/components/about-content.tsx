export const AboutContent = () => {
  return (
    <section className="py-20 px-4 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold lowercase mb-8">about me</h2>
      <div className="space-y-6 text-gray-700 lowercase leading-relaxed">
        <p>
          i am an infrastructure & security engineer passionate about building 
          resilient and secure digital environments.
        </p>
        <h3 className="text-xl font-semibold text-black mt-10">core skills</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>cloud infrastructure (aws/azure)</li>
          <li>network security & architecture</li>
          <li>devsecops & automation</li>
          <li>linux system administration</li>
        </ul>
      </div>
    </section>
  );
};
