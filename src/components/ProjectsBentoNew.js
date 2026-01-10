import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';

export default function ProjectsBento() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const projects = [
    {
      title: "CMATMUL",
      href: "https://github.com/ollycassidy13/CMATMUL",
      image: "/img/cannl.png",
      description: "I developed an effective C++ based matrix multiplication kernel leading to over a 100x increase in throughput from a naïve solution by implementing cache-aware tiling, register blocking, an AVX2 microkernel and OpenMP parallelism",
      category: "Performance"
    },
    {
      title: "MP3Meta",
      href: "https://mp3-meta.vercel.app/",
      image: "/img/mp3meta.png",
      description: "I implemented a React based web application to allow users to edit the metadata of MP3 files. The application uses the ID3 library to read and write the metadata.",
      category: "Web App"
    },
    {
      title: "Topz",
      href: "https://github.com/ollycassidy13/Topz",
      image: "/img/topz.png",
      description: "I created a system performance monitor for Linux in C++. The application provides real-time monitoring of CPU, memory, and disk usage, with a user-friendly interface.",
      category: "System Tools"
    },
    {
      title: "Network Intrusion Detection",
      href: "https://github.com/ollycassidy13/nids",
      image: "/img/nids.png",
      description: "A system to detect and classify network intrusions using a fully connected FNN trained on the CIC-IDS2017 dataset, capable of distinguishing between 15 different types of attacks.",
      category: "Machine Learning"
    },
    {
      title: "Wildfire Sentinel",
      href: "https://wildfire-sentinel.onrender.com/",
      image: "/img/wildfire.png",
      description: "React-based web application displaying NASA wildfire data on an interactive OpenStreetMap with real-time event tracking and date range filtering.",
      category: "Data Visualization"
    },
    {
      title: "Landline",
      href: "/landline",
      image: "/img/landline.jpg",
      description: "A landline created using Op Amps, logic gates and flip flops with PCM transmission over fiber optic cable. Presented at the Craft! X Scale Down Symposium.",
      category: "Hardware"
    },
    {
      title: "CompressedLUT",
      href: "https://github.com/ollycassidy13/CompressedLUT",
      image: "/img/lut.png",
      description: "Updated CompressedLUT for LUT-based neural networks like LogicNets and NeuraLUT, ensuring lossless compression in Verilog models.",
      category: "FPGA"
    },
    {
      title: "LogicTrace",
      href: "https://github.com/ollycassidy13",
      image: "/img/logictrace.png",
      description: "Coming Soon!!",
      category: "Coming Soon"
    },
    {
      title: "Lego Minifigure Designer",
      href: "https://lego-design.vercel.app/",
      image: "/img/lego.png",
      description: "Interactive webpage to customize Lego minifigures with animations. Currently developing an iOS Swift app version.",
      category: "Interactive"
    },
    {
      title: "Snake Game",
      href: "https://github.com/ollycassidy13/Snake",
      image: "/img/snake.png",
      description: "Classic snake game developed in Java with Swing GUI, featuring pause/restart functionality and score tracking.",
      category: "Game"
    },
    {
      title: "Voltmeter",
      href: "/voltmeter",
      image: "/img/voltmeter.jpg",
      description: "A voltmeter built from logic gates and op amps using a ramp generator for ADC, accurate to ±0.5V in the 0-9.5V range.",
      category: "Hardware"
    },
    {
      title: "BeatBox",
      href: "https://github.com/ollycassidy13/BeatBox",
      image: "/img/beatbox.png",
      description: "MP3 player with rotating vinyl UI. Migrating to Electron framework with Three.js 3D animations.",
      category: "Music App"
    },
  ];

  return (
<section 
  ref={sectionRef}
  id="projects" 
  className="relative min-h-screen bg-gradient-to-b from-white to-[#f5f3ef] py-32 overflow-hidden"
>
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <motion.div 
        className="mx-auto max-w-3xl text-center mb-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="inline-block mb-4 px-4 py-2 bg-violet-100 rounded-full"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-semibold text-violet-600">MY WORK</span>
        </motion.div>
        <h2 className="text-6xl font-black text-gray-900 mb-6">
          Featured <span className="italic bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">Projects</span>
        </h2>
        <p className="text-xl text-gray-600">
          A selection of my favorite projects spanning hardware, software, and research.
        </p>
      </motion.div>
      
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </div>

    {/* Background Decoration */}
    <motion.div
      className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-br from-violet-200 to-indigo-200 rounded-full blur-3xl opacity-20"
      style={{ y }}
    />
</section>
  );
}

function ProjectCard({ project, index }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
    >
      <motion.a 
        href={project.href}
        className="group block h-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ y: -8 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="relative h-full overflow-hidden rounded-3xl bg-white shadow-md hover:shadow-2xl transition-all border border-gray-100">
          {/* Image with stacking effect */}
          <div className="relative h-64 overflow-hidden">
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-violet-500 opacity-10"
              animate={{ 
                scale: isHovered ? 1.1 : 1,
                rotate: isHovered ? 3 : 0 
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover"
              animate={{ 
                scale: isHovered ? 1.1 : 1,
                rotate: isHovered ? -2 : 0 
              }}
              transition={{ duration: 0.3 }}
            />
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-semibold text-indigo-600 rounded-full">
                {project.category}
              </span>
            </div>
          </div>
          
          {/* Content */}
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-indigo-600 transition-colors">
              {project.title}
            </h3>
            <p className="text-gray-600 leading-relaxed line-clamp-3">
              {project.description}
            </p>
            <div className="mt-4 flex items-center text-indigo-600 font-semibold">
              <span>View Project</span>
              <motion.svg 
                className="w-5 h-5 ml-2" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                animate={{ x: isHovered ? 5 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </motion.svg>
            </div>
          </div>
        </div>
      </motion.a>
    </motion.div>
  );
}
