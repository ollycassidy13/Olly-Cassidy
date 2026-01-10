import React from "react";
import { motion } from "framer-motion";
import "./styles/Timeline.css";

function TimelineSection() {
  const timelineItems = [
    {
      date: "2021",
      title: "A Levels",
      description: "I studied at The Manchester Grammar School and achieved A* in Maths, Further Maths, Physics and Electronics"
    },
    {
      date: "2023",
      title: "University",
      description: "I'm studying Electronic and Information Engineering at Imperial College London and I'm predicted First-Class Honours"
    },
    {
      date: "2024",
      title: "Dean's List 2024",
      description: "I ranked 2nd in year at Imperial College London"
    },
    {
      date: "2024",
      title: "Research Opportunity",
      description: "I undertook a research opportunity focusing on reducing P-LUT utilization when implementing L-LUT based NN models on FPGA devices"
    },
    {
      date: "2025",
      title: "ISFPGA 2025",
      description: "Presented ReducedLUT at the FPGA 2025 conference in Monterey California"
    },
    {
      date: "2025",
      title: "Software Engineering Internship",
      description: "Worked as a Software Engineering Intern at T. Rowe Price where I focused on implementing OpenAI agents securely in Azure-based pipelines"
    },
    {
      date: "2025",
      title: "Fast ML 2025",
      description: "Helped deliver a tutorial on LUT-based NNs including a live demonstration of models running end-to-end on a PYNQ board"
    },
    {
      date: "2026",
      title: "AMD Reasearch and Advanced Development Internship",
      description: "Starting in March I will spend 6 months working on novel low latency AI acceleration techniques in AMD's RAD lab"
    }
  ];

  return (
    <section className="relative min-h-screen bg-[#1a3a2e] py-32" id="timeline">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          className="mx-auto max-w-3xl text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-block mb-4 px-4 py-2 bg-emerald-900/50 rounded-full border border-emerald-700"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-semibold text-emerald-300">MY JOURNEY</span>
          </motion.div>
          <h2 className="text-6xl font-black text-white mb-6">
            Educational <span className="italic text-emerald-400">Timeline</span>
          </h2>
          <p className="text-xl text-gray-300">
            Key milestones in my academic and professional development
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-emerald-500 via-emerald-400 to-emerald-300 opacity-30"></div>
          
          <div className="space-y-12">
            {timelineItems.map((item, index) => (
              <motion.div
                key={index}
                className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <motion.div
                    className="inline-block"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow border-l-4 border-emerald-500">
                      <div className="text-emerald-600 font-bold text-sm mb-2">{item.date}</div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                </div>

                {/* Center dot */}
                <motion.div 
                  className="relative z-10"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <div className="w-6 h-6 rounded-full bg-emerald-500 border-4 border-emerald-900 shadow-lg"></div>
                </motion.div>

                {/* Spacer */}
                <div className="flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TimelineSection;