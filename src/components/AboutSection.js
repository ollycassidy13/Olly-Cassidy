export default function AboutSection() {
    const aboutCards = [
      {
        title: "Studying",
        content: "I am a second-year Electronic and Information Engineering student, recently named to the Dean's List for 2024 ranking 2nd the year, with a passion for building innovative hardware and software solutions. I recently undertook a research placement focused on ultra-low latency FPGA-based machine learning, where I was the lead author of a paper that explored hardware optimisation for real-time ML applications.",
        link: "#education"
      },
      {
        title: "Running",
        content: "I am also a dedicated athlete, running competitively for both Imperial College and Thames Valley Harriers. Training and competing as an athlete has taught me resilience, time management, and the importance of \"trusting the plan\", all of which I aim bring into the rest of my life. I compete in 3k and 5k events on the track and I'm currently experimenting with some shorter distances outside of my normal goals."
      },
      {
        title: "Projects",
        content: "Outside of my studies, I have been involved in various projects ranging from hardware design such as a remote control car and a landline from gate level to web design, hardware optimization and software development. You can find more details on my favourite projects below and be sure to click on the tiles for more information!",
        link: "#projects"
      },
      {
        title: "Music",
        content: "I have a strong love of music and I enjoy making playlists on Spotify to share my favorite songs. Check out what I'm listening to here ->",
        spotifyEmbed: "https://open.spotify.com/embed/playlist/3swVm6ONJql9RHzD7AXem5" 
      }
    ];
  
    return (
      <section id="about" className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">  
        <h2 className="text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
            Who Am I?
        </h2>
        </div>
          
          <div className="grid gap-6 md:grid-cols-2">
            {aboutCards.map((card, index) => (
              <div key={index} className="relative">
                {card.link ? (
                  <a href={card.link} className="block">
                    <div className="group h-full overflow-hidden rounded-3xl bg-white shadow-md transition-all hover:shadow-lg">
                      <div className="p-8">
                        <h3 className="text-2xl font-semibold mb-4 text-gray-900 group-hover:text-indigo-600">
                          {card.title}
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                          {card.content}
                        </p>
                      </div>
                    </div>
                  </a>
                ) : card.spotifyEmbed ? (
                  <div className="group h-full overflow-hidden rounded-3xl bg-white shadow-md transition-all hover:shadow-lg">
                    <div className="p-8 grid grid-cols-2 gap-4">
                      <div>
                        <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                          {card.title}
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                          {card.content}
                        </p>
                      </div>
                      <div className="flex items-center">
                        <iframe
                          src={card.spotifyEmbed}
                          width="100%"
                          height="152"
                          frameBorder="0"
                          allowtransparency="true"
                          allow="encrypted-media"
                          className="rounded-lg"
                        ></iframe>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="group h-full overflow-hidden rounded-3xl bg-white shadow-md transition-all hover:shadow-lg">
                    <div className="p-8">
                      <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                        {card.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {card.content}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }