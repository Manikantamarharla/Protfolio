function Projects() {
  return (
    <section id="projects" className="projects">

      <h2>Projects</h2>

      <div className="project-grid">

        <div className="project-card">
          <h3>Quiz App</h3>

          <p>
            A Quiz Platform developed using HTML, CSS and JavaScript.
            Features include Admin Login, User Login, Multiple Quiz
            Categories, Leaderboard, Rewards and Score Tracking.
          </p>

          <div className="tech">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
          </div>

          <a
            href="https://github.com/Manikantamarharla/Quiz-App"
            target="_blank"
            rel="noreferrer"
          >
            View Project
          </a>
        </div>

        <div className="project-card">
          <h3>Applicant Tracking System</h3>

          <p>
            ATS application that analyzes resumes and provides
            job matching insights using Python and Flask.
          </p>

          <div className="tech">
            <span>Python</span>
            <span>Flask</span>
            <span>JavaScript</span>
          </div>
        </div>

        <div className="project-card">
          <h3>Employee Management System</h3>

          <p>
            CRUD application developed using React, Node.js
            and MongoDB for managing employee records.
          </p>

          <div className="tech">
            <span>React</span>
            <span>Node.js</span>
            <span>MongoDB</span>
          </div>
        </div>

        <div className="project-card">
          <h3>Bus Ticket Booking System</h3>

          <p>
            Online bus reservation application with booking,
            cancellation and user management features.
          </p>

          <div className="tech">
            <span>Java</span>
            <span>MySQL</span>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Projects;