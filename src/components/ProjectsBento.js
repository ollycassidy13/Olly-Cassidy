export default function ProjectsBento() {
  const projects = [
    {
      title: "CMATMUL",
      href: "https://github.com/ollycassidy13/CMATMUL",
      image: "/img/cannl.png",
      description: "I developed an effective C++ based matrix multiplication kernel leading to over a 100x increase in throughput from a naïve solution by implementing cache-aware tiling, register blocking, an AVX2 microkernel and OpenMP parallelism",
      size: "lg:col-span-2 lg:row-span-1"
    },
    {
      title: "MP3Meta",
      href: "https://mp3-meta.vercel.app/",
      image: "/img/mp3meta.png",
      description: "I implemented a React based web application to allow users to edit the metadata of MP3 files. The application uses the ID3 library to read and write the metadata, and allows users to edit the title, artist, album, year and more. The application is hosted on Vercel.",
      size: "lg:row-span-2"
    },
    {
      title: "Topz",
      href: "https://github.com/ollycassidy13/Topz",
      image: "/img/topz.png",
      description: "I created a system performance monitor for Linux in C++. The application provides real-time monitoring of CPU, memory, and disk usage, with a user-friendly interface. It uses the ncurses library for terminal-based UI.",
      size: "lg:col-span-2 lg:row-span-1"
    },
    {
      title: "Network Intrusion Detection System",
      href: "https://github.com/ollycassidy13/nids",
      image: "/img/nids.png",
      description: "In this project I aimed to create a system to detect and classify network intrusions. The project is based around a fully connected FNN which was trained on the CIC-IDS2017 dataset. It is capable of detecting and distingushing between 15 different types of attack. I implemented packet sniffing in C, before moving to use the scapy library in python to run the model.",
      size: "lg:col-span-2 lg:row-span-1"
    },
    {
      title: "Wildfire Sentinel",
      href: "https://wildfire-sentinel.onrender.com/",
      image: "/img/wildfire.png",
      description: "Wildfire Sentinel is a React-based web application that displays NASA wildfire data on an interactive OpenStreetMap. The application fetches wildfire event data from NASA’s EONET API (via a custom Express backend) and overlays the events as markers on the map. Each marker provides details about the wildfire event, including title, location, date, and coordinates. A draggable date picker allows users to specify a date range for which the data is displayed.",
      size: "lg:row-span-1"
    },
    {
      title: "Landline",
      href: "/landline",
      image: "/img/landline.jpg",
      description: "This project was to create a landline using Op Amps, logic gates and flip flops. A PCM transmitter and reciever pair was used, with a fibre optic cable used for data transmission between the transmitter/reciever. This project was presented at the Craft! X Scale Down Symposium.",
      size: "lg:row-span-2"
    },
    {
      title: "CompressedLUT",
      href: "https://github.com/ollycassidy13/CompressedLUT",
      image: "/img/lut.png",
      description: "I updated the CompressedLUT open-source code from FPGA 2024 such that for application to LUT based NN's such as LogicNets or NeuraLUT. I ensured it was lossless when testing the Verilog based model using Verilator.",
      size: "lg:col-span-1 lg:row-span-1"
    },
    {
        title: "LogicTrace",
        href: "https://github.com/ollycassidy13",
        image: "/img/logictrace.png",
        description: "Coming Soon!!",
        size: "lg:col-span-1 lg:row-span-1"
    },
    {
      title: "Lego Minifigure Design",
      href: "https://lego-design.vercel.app/",
      image: "/img/lego.png",
      description: "I designed a webpage to allow you to customise Lego minifigures by changing their colours, faces and headwear. The project used HTML, CSS and JavaScript, and incorporated animations to show the changes to the minifigures. I am currently working to move the page to a Swift app for iOS. Click this box to visit the webpage!",
      size: "lg:col-span-2 lg:row-span-1"
    },
    {
      title: "Snake Game",
      href: "https://github.com/ollycassidy13/Snake",
      image: "/img/snake.png",
      description: "I developed a Snake game using Java, complete with a graphical user interface (GUI) designed in Swing. The game features a classic snake gameplay experience, where the player controls a snake to eat food and grow longer while avoiding collisions with the walls and itself. The GUI includes pause/restart functionality, and a score display.",
      size: "lg:row-span-2"
    },
    {
      title: "oh-my-xilinx",
      href: "https://github.com/ollycassidy13/oh-my-xilinx",
      image: "/img/vivado.webp",
      description: "I updated the open-source oh-my-xilinx repository to ensure it was compatible with the NeuraLUT toolflow developed during my summer placement at Imperial. This is also used in the ReducedLUT toolflow presented in the NeuraLUT repository too, and most recently NeuraLUT-Assemble.",
      size: "lg:row-span-1"
    },
    {
      title: "Voltmeter",
      href: "/voltmeter",
      image: "/img/voltmeter.jpg",
      description: "I designed and built a voltmeter from low level components such as logic gates and op amps. The voltmeter used a ramp generator to convert from analogue to digital, and seven segment displays for the output. It had a working range of 0-9.5V and was accurate to ±0.5V.",
      size: "lg:col-span-1 lg:row-span-1"
    },
    {
        title: "Shop Counter",
        href: "/#projects",
        image: "/img/shop_counter.jpg",
        description: "I used logic gates and D flip-flops to implement sequential logic for a shop counter. I used two light gates to track peoples movements through a door, before the sequential logic determined the persons direction of travel and therefore the direction in which the counter should count.",
        size: "lg:col-span-1 lg:row-span-1"
    },
    {
        title: "BeatBox",
        href: "https://github.com/ollycassidy13/BeatBox",
        image: "/img/beatbox.png",
        description: "I designed a MP3 player using the custom tkinter library for the interface. The player would allow users to load songs, save a playlist and play the playlist, with a clean UI featuring a rotating vinyl player. Currently I'm working on moving to an Electron framework, and adding a 3D vinyl player animation using Three.js.",
        // size: "lg:row-span-2"
        size: "lg:row-span-1"
    },
    {
      title: "Remote Control Car",
      href: "/#projects",
      image: "/img/car.jpg",
      description: "I designed and built a remote control car from logic, counters and MOSFETs. I used a crystal oscillator to generate a sine wave for RF transmission. I built H bridge motor drivers from MOSFETs and used logic to control the motor direction. The control system used counters and a clock which was synchronised between the transmitter/receiver.",
      size: "lg:col-span-2 lg:row-span-1"
    },
    {
      title: "Collabify",
      href: "https://github.com/ollycassidy13",
      image: "/img/collabify2.png",
      description: "Coming Soon!!",
      size: "lg:row-span-1"
    }
  ];

  return (
<section id="projects" className="bg-gradient-to-b from-gray-100 to-gray-50 py-12 sm:py-16">
    <div className="bg-gray-50 py-12 sm:py-16">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
              Projects
            </h2>
            <p className="mt-4 text-lg text-indigo-600">
              Click on the projects to learn more!
            </p>
          </div>
        
        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:auto-rows-[minmax(200px,auto)]">
          {projects.map((project, index) => (
            <div key={index} className={`relative ${project.size}`}>
              <a href={project.href} className="group block h-full">
                <div className="absolute inset-px rounded-lg bg-white"></div>
                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
                  <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                    <h3 className="text-2xl font-medium tracking-tight text-gray-950 group-hover:text-indigo-600">
                      {project.title}
                    </h3>
                    <p className="mt-4 text-base text-gray-600">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex flex-1 items-center justify-center p-6">
                    <div className={`relative w-full ${project.size.includes('row-span-2') ? 'h-[400px]' : 'h-[200px]'}`}>
                      <img
                        src={project.image}
                        alt={`${project.title} Project`}
                        className="absolute inset-0 h-full w-full rounded-lg object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5"></div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
</section>
  );
}