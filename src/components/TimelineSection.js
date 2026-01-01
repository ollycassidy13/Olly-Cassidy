import React from "react";
import "./styles/Timeline.css";

function TimelineSection() {
  return (
    <section className="timeline-section" id="timeline">
        <div className="mx-auto max-w-2xl text-center mb-6">
            <h2 className="text-3xl font-semibold tracking-tight text-gray-950 sm:text-4xl">
              Timeline
            </h2>
        </div>      
      <div className="timeline-items compact">
        {/* <div className="timeline-item">
          <div className="timeline-date">2019</div>
          <div className="timeline-content">
            <h3>GCSEs</h3>
            <p>I studied at The Manchester Grammar School where I achieved 8x9's and 2x8's</p>
          </div>
        </div> */}

        <div className="timeline-item">
          <div className="timeline-date">2021</div>
          <div className="timeline-content">
            <h3>A Levels</h3>
            <p>I studied at The Manchester Grammar School and achieved A* in Maths, Further Maths, Physics and Electronics</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-date">2023</div>
          <div className="timeline-content">
            <h3>University</h3>
            <p>I'm studying Electronic and Information Engineering at Imperial College London and I'm predicted First-Class Honours</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-date">2024</div>
          <div className="timeline-content">
            <h3>Dean's List 2024</h3>
            <p>I ranked 2nd in year at Imperial College London</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-date">2024</div>
          <div className="timeline-content">
            <h3>Research Opportunity</h3>
            <p>I undertook a research opportunity focusing on reducing P-LUT utilization when implementing L-LUT based NN models on FPGA devices</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-date">2025</div>
          <div className="timeline-content">
            <h3>ISFPGA 2025</h3>
            <p>Presented ReducedLUT at the FPGA 2025 conference in Monterey California</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-date">2025</div>
          <div className="timeline-content">
            <h3>Cloud Engineering Internship</h3>
            <p>Worked as a Cloud Engineering Intern at T. Rowe Price where I focused on implementing OpenAI agents securely in Azure-based pipelines</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-date">2025</div>
          <div className="timeline-content">
            <h3>Fast ML 2025</h3>
            <p>Helped deliver a tutorial on LUT-based NNs and demonstrated live end-to-end models on a PYNQ board</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TimelineSection;