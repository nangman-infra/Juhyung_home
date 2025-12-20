export const ResumeDetail = () => {
  return (
    <section className="py-20 px-4 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold lowercase mb-12">portfroile / resume</h2>
      
      <div className="space-y-12">
        {/* experience section */}
        <div>
          <h3 className="text-xl font-semibold lowercase border-b pb-2 mb-4">experience</h3>
          <div className="space-y-6">
            <div>
              <p className="font-medium">infrastructure engineer @ company name</p>
              <p className="text-sm text-gray-500">2023 - present</p>
              <ul className="list-disc pl-5 mt-2 text-gray-700 text-sm lowercase">
                <li>cloud infrastructure management and optimization</li>
                <li>security policy enforcement and monitoring</li>
              </ul>
            </div>
          </div>
        </div>

        {/* education section */}
        <div>
          <h3 className="text-xl font-semibold lowercase border-b pb-2 mb-4">education</h3>
          <div>
            <p className="font-medium">university name</p>
            <p className="text-sm text-gray-500 lowercase">bachelor of computer science (2018 - 2022)</p>
          </div>
        </div>
      </div>
    </section>
  );
};
