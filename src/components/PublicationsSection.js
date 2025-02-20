export default function PublicationsSection() {
    return (
    <section id="papers" className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-24 sm:py-32">
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
              Conference Publications
            </h2>
            <p className="mt-4 text-lg text-indigo-600">
              Click on the papers to learn more!
            </p>
          </div>
  
          <div className="mt-16 grid gap-8 sm:grid-cols-1 lg:grid-cols-1">
            <a 
              href="https://arxiv.org/abs/2412.18579"
              className="group relative block overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all hover:shadow-xl"
            >
              <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-1/3">
                  <img
                    src="/img/reducedlut.JPG"
                    alt="ReducedLUT"
                    className="w-full rounded-lg object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                
                <div className="w-full md:w-2/3">
                  <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-indigo-600">
                    ReducedLUT: Table Decomposition with "Don't Care" Conditions
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed text-gray-600">
                    I was the lead-author of a paper accepted to FPGA 2025 which introduces ReducedLUT,
                    a novel method to reduce the footprint of the L-LUTs required by LUT-based
                    NNs by injecting don't cares into the compression process.
                    This additional freedom introduces more self-similarities which can be
                    exploited using known decomposition techniques. We then demonstrated
                    a particular application to machine learning; by replacing unobserved
                    patterns within the training data of neural network models with don't cares,
                    we enable greater compression with minimal model accuracy degradation.
                    In practice, we achieved up to 1.63× reduction in P-LUT utilization,
                    with a test accuracy drop of no more than 0.01 accuracy points.
                  </p>
                </div>
              </div>
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10 group-hover:ring-indigo-600/20"></div>
            </a>
          </div>
        </div>
      </div>
    </section>
    )
  }