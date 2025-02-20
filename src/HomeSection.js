import React, { useState, useEffect, useRef } from 'react';

export default function HomeSection() {
  const roles = [
    "Software Engineer",
    "Electronic Engineer",
    "FPGA Researcher",
    "Web Developer",
    "Dean's List Student"
  ];
  
  const [currentRole, setCurrentRole] = useState(0);
  const lineRef = useRef(null);

  useEffect(() => {
    if (lineRef.current) {
      const text = roles[currentRole];
      const tempSpan = document.createElement('span');
      tempSpan.style.visibility = 'hidden';
      tempSpan.style.font = window.getComputedStyle(lineRef.current).font;
      tempSpan.textContent = text;
      document.body.appendChild(tempSpan);
      const width = tempSpan.offsetWidth;
      document.body.removeChild(tempSpan);
      lineRef.current.style.setProperty('--final-width', `${width}px`);
    }

    const timer = setTimeout(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 4000);

    return () => clearTimeout(timer);
  }, [currentRole]);

  return (
    <section class="home" id="home">
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-4 lg:auto-rows-[minmax(120px,auto)]">
          <div className="relative lg:col-span-3">
            <div className="group h-full overflow-hidden rounded-3xl bg-white shadow-md transition-all hover:shadow-lg">
              <div className="relative flex h-full flex-col justify-center p-8 sm:p-10">
                <h1 className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-6xl font-bold text-transparent sm:text-7xl">
                  Hi, It's <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text">Olly Cassidy</span>
                </h1>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="group h-full overflow-hidden rounded-3xl bg-white shadow-md transition-all hover:shadow-lg">
              <div className="relative flex h-full flex-col justify-center p-8">
                <p className="text-lg font-medium text-gray-600">I'm a</p>
                <div className="h-[40px] relative flex items-center">
                  <div 
                    ref={lineRef}
                    key={currentRole} 
                    className="line-1 anim-typewriter text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600"
                  >
                    {roles[currentRole]}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative lg:row-span-2">
            <div className="group h-full overflow-hidden rounded-3xl bg-white shadow-md transition-all hover:shadow-lg">
              <img
                src="/img/home.jpg"
                alt="Olly Cassidy"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>

          <div className="relative lg:col-span-3 grid grid-cols-3 gap-6">
            <a href="https://linkedin.com/in/oliver-cassidy-286ba3235" 
               className="group overflow-hidden rounded-3xl bg-white shadow-md transition-all hover:shadow-lg">
              <div className="relative h-full p-6">
                <img
                  src="/img/linkedin.png"
                  alt="LinkedIn"
                  className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </a>
            
            <a href="https://github.com/ollycassidy13"
               className="group overflow-hidden rounded-3xl bg-white shadow-md transition-all hover:shadow-lg">
              <div className="relative h-full p-6">
                <img
                  src="/img/github.png"
                  alt="GitHub"
                  className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </a>
            
            <a href="https://scholar.google.com/citations?user=CzGdJSAAAAAJ&hl=en"
               className="group overflow-hidden rounded-3xl bg-white shadow-md transition-all hover:shadow-lg">
              <div className="relative h-full p-6">
                <img
                  src="/img/scholar.png"
                  alt="Google Scholar"
                  className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </a>
          </div>

          <div className="relative lg:col-span-3 grid grid-cols-3 gap-6">
            <a href="Oliver_Cassidy_CV.pdf" 
               download="Oliver_Cassidy_CV.pdf"
               className="group overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-600 to-violet-600 shadow-md transition-all hover:shadow-lg hover:scale-[1.02] relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-violet-600 animate-pulse opacity-50"></div>
              <div className="relative flex h-full items-center justify-center p-6">
                <span className="flex items-center gap-3 text-xl font-semibold text-white transition-transform duration-300 group-hover:-translate-y-2">
                  <svg 
                    className="w-6 h-6" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" 
                    />
                  </svg>
                  Download CV
                </span>
              </div>
            </a>
            
            <a href="#papers"
               className="group overflow-hidden rounded-3xl bg-white shadow-md transition-all hover:shadow-lg">
              <div className="relative h-full p-6">
                <img
                  src="/img/papers.png"
                  alt="Papers Section"
                  className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </a>
            
            <a href="#projects"
               className="group overflow-hidden rounded-3xl bg-white shadow-md transition-all hover:shadow-lg">
              <div className="relative h-full p-6">
                <img
                  src="/img/projects.png"
                  alt="Projects Section"
                  className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}