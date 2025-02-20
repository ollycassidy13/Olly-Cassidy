export default function CommitsSection() {
    return (
      <section id="commits-section">
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
              My GitHub Contributions
            </h2>
            <p className="mt-4 text-lg text-indigo-600">
              See my contribution activity below:
            </p>
          </div>
          
          <div className="mt-10 flex justify-center">
            <div className="w-full max-w-[1000px] min-h-[200px] flex justify-center items-center overflow-hidden">
              <iframe
                className="w-[800px] h-[200px] border-0 transition-transform duration-200 ease-in-out"
                src="https://ghchart.rshah.org/ollycassidy13"
                scrolling="no"
                title="GitHub Contributions Chart"
              />
            </div>
          </div>
  
          <div className="mt-10 flex justify-center">
            <a
              href="https://github.com/ollycassidy13"
              className="rounded-md bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Visit GitHub Profile
            </a>
          </div>
        </div>
      </div>
      </section>
    )
  }