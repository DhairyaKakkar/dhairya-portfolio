import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Researcher</h4>
                <h5>URECA, Nanyang Technological University</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Examined strategies to streamline LLMs by synchronizing hardware
              and software advancements. Compared evaluation metrics of 5
              multimodal zero-shot chatbots to proprietary models like GPT-4o.
              Devised directions incorporating RAG and high-speed retrieval.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Development Engineer Intern</h4>
                <h5>The Software Practice Pte Ltd</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Implemented and enhanced backend services for HSA's Internet and
              Intranet applications using C# (.NET), Docker, SQL, and Swagger.
              Owned Jira tickets end-to-end, managed deployments across SIT,
              UAT, and Production via GitLab, and monitored with AWS & OpenLens.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
