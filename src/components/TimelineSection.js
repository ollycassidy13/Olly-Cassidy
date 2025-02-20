import React from "react";
import "./styles/Timeline.css";

function TimelineSection() {
  return (
    <section className="timeline-section" id="timeline">
        <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
              Timeline
            </h2>
        </div>      
      <div className="timeline-items">
        <div className="timeline-item">
          <div className="timeline-date">2019</div>
          <div className="timeline-content">
            <h3>GCSEs</h3>
            <p>I studied at The Manchester Grammar School where I achieved 8x9's and 2x8's</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-date">2021</div>
          <div className="timeline-content">
            <h3>A Levels</h3>
            <p>I studied Maths, Further Maths, Physics and Electronics at The Manchester Grammar School where I achieved A* grades in every subject</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-date">2023</div>
          <div className="timeline-content">
            <h3>University</h3>
            <p>I'm studying Electronic and Information Engineering at Imperial College London, where I'm predicted a First-Class Honours</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-date">2024</div>
          <div className="timeline-content">
            <h3>Dean's List 2023-24</h3>
            <p>I achieved Dean's List for the 2024 year at Imperial College London, ranking 2nd in the year</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-date">2024</div>
          <div className="timeline-content">
            <h3>Undergraduate Research Opportunity</h3>
            <p>I undertook a research opportunity focusing on reducing P-LUT utilization when implementing L-LUT based NN models on FPGA devices, where I was the lead author on a paper accepted to ACM's FPGA 2025 Conference</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TimelineSection;