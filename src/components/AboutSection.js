import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function AboutSection() {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: sectionRef,
      offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

    const aboutCards = [
      {
        title: "Academics",
        content: "I am a penultimate-year Electronic and Information Engineering student. Some of my favourite courseworks include a pipelined RISC-V CPU implemented in SystemVerilog and a C90 compiler. Outside of my degree I've been enjoying research related to the efficient use of FPGAs across different domains.",
        link: "#timeline",
        icon: "🎓"
      },
      {
        title: "Running",
        content: "I am also a dedicated athlete, running competitively for both Imperial College and Thames Valley Harriers. Training and competing as an athlete has taught me resilience, time management, and the importance of \"trusting the plan\", all of which I aim bring into the rest of my life. I compete in 3k and 5k events on the track and I'm currently experimenting with some shorter distances outside of my normal goals.",
        icon: "🏃"
      },
      {
        title: "Projects",
        content: "Outside of my studies, I have been involved in various projects ranging from hardware design such as a remote control car and a landline from gate level to web design, hardware optimization and software development. You can find more details on my favourite projects below and be sure to click on the tiles for more information!",
        link: "#projects",
        icon: "💻"
      },
      {
        title: "Music",
        content: "I have a strong love of music and I enjoy making playlists on Spotify to share my favorite songs. Check out what I'm listening to here ->",
        spotifyEmbed: "https://open.spotify.com/embed/playlist/3swVm6ONJql9RHzD7AXem5",
        icon: "🎵"
      }
    ];
  
    return (
      <section 
        ref={sectionRef}
        id="about" 
        className="relative min-h-screen bg-gradient-to-b from-[#f5f3ef] to-white py-32"
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
              className="inline-block mb-4 px-4 py-2 bg-indigo-100 rounded-full"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <span className="text-sm font-semibold text-indigo-600">GET TO KNOW ME</span>
            </motion.div>
            <h2 className="text-6xl font-black text-gray-900 mb-6">
              Ideas Crafted<br />
              <span className="italic bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">Into Impact</span>
            </h2>
            <p className="text-xl text-gray-600">
              Every creation combines precision engineering with creative thinking,
              turning ambitious ideas into tangible results.
            </p>
          </motion.div>
          
          <div className="grid gap-8 md:grid-cols-2">
            {aboutCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {card.link ? (
                  <motion.a 
                    href={card.link} 
                    className="block h-full"
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="group h-full overflow-hidden rounded-3xl bg-white shadow-md hover:shadow-2xl transition-all border border-gray-100">
                      <div className="p-10">
                        <div className="text-5xl mb-4">{card.icon}</div>
                        <h3 className="text-3xl font-bold mb-4 text-gray-900 group-hover:text-indigo-600 transition-colors">
                          {card.title}
                        </h3>
                        <p className="text-gray-700 leading-relaxed text-lg">
                          {card.content}
                        </p>
                        <div className="mt-6 flex items-center text-indigo-600 font-semibold">
                          <span>Learn more</span>
                          <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </motion.a>
                ) : card.spotifyEmbed ? (
                  <motion.div 
                    className="group h-full overflow-hidden rounded-3xl bg-white shadow-md hover:shadow-2xl transition-all border border-gray-100"
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="p-10">
                      <div className="text-5xl mb-4">{card.icon}</div>
                      <h3 className="text-3xl font-bold mb-4 text-gray-900">
                        {card.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed text-lg mb-6">
                        {card.content}
                      </p>
                      <div className="mt-6">
                        <iframe
                          src={card.spotifyEmbed}
                          width="100%"
                          height="152"
                          frameBorder="0"
                          allowtransparency="true"
                          allow="encrypted-media"
                          className="rounded-2xl"
                          title="Spotify Playlist"
                        ></iframe>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div 
                    className="group h-full overflow-hidden rounded-3xl bg-white shadow-md hover:shadow-2xl transition-all border border-gray-100"
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="p-10">
                      <div className="text-5xl mb-4">{card.icon}</div>
                      <h3 className="text-3xl font-bold mb-4 text-gray-900">
                        {card.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed text-lg">
                        {card.content}
                      </p>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Background Decoration */}
        <motion.div
          className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-br from-indigo-200 to-violet-200 rounded-full blur-3xl opacity-20"
          style={{ y, opacity }}
        />
      </section>
    );
  }