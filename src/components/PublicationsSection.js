import { motion } from 'framer-motion';

export default function PublicationsSection() {
    return (
    <section id="papers" className="relative min-h-screen bg-gradient-to-b from-[#f5f3ef] to-white py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          className="mx-auto max-w-3xl text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-block mb-4 px-4 py-2 bg-indigo-100 rounded-full"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-semibold text-indigo-600">RESEARCH</span>
          </motion.div>
          <h2 className="text-6xl font-black text-gray-900 mb-6">
            Conference <span className="italic bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">Publications</span>
          </h2>
          <p className="text-xl text-gray-600">
            Pushing the boundaries of FPGA-based neural network optimization
          </p>
        </motion.div>

        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.a 
            href="https://arxiv.org/abs/2412.18579"
            className="group relative block overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all border border-gray-100"
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex flex-col lg:flex-row gap-8 p-10">
              <div className="w-full lg:w-2/5">
                <motion.div
                  className="relative overflow-hidden rounded-2xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-violet-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <img
                    src="/img/reducedlut.JPG"
                    alt="ReducedLUT"
                    className="w-full rounded-2xl object-cover"
                  />
                </motion.div>
                <div className="mt-6 flex gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-semibold rounded-full">FPGA 2025</span>
                  <span className="px-3 py-1 bg-violet-100 text-violet-700 text-xs font-semibold rounded-full">Lead Author</span>
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-semibold rounded-full">Published</span>
                </div>
              </div>
              
              <div className="w-full lg:w-3/5 flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors mb-4">
                  ReducedLUT: Table Decomposition with "Don't Care" Conditions
                </h3>
                <p className="text-lg leading-relaxed text-gray-600 mb-6">
                  I was the lead-author of a paper accepted to FPGA 2025 which introduces ReducedLUT,
                  a novel method to reduce the footprint of the L-LUTs required by LUT-based
                  NNs by injecting don't cares into the compression process.
                  This additional freedom introduces more self-similarities which can be
                  exploited using known decomposition techniques.
                </p>
                <div className="bg-gradient-to-r from-indigo-50 to-violet-50 rounded-xl p-6 mb-6">
                  <h4 className="font-bold text-gray-900 mb-2">Key Results</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-indigo-600 mr-2">•</span>
                      <span>Up to <strong>1.63× reduction in P-LUT utilization</strong></span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-600 mr-2">•</span>
                      <span>Minimal accuracy drop: <strong>≤0.01 accuracy points</strong></span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-600 mr-2">•</span>
                      <span>Novel don't-care injection methodology</span>
                    </li>
                  </ul>
                </div>
                <div className="flex items-center text-indigo-600 font-semibold">
                  <span>Read the full paper</span>
                  <motion.svg 
                    className="w-5 h-5 ml-2" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </motion.svg>
                </div>
              </div>
            </div>
          </motion.a>
        </motion.div>
      </div>
    </section>
    )
  }