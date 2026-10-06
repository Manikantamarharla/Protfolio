import { motion } from "framer-motion";

function Hero() {
  return (
    <motion.section
      id="home"
      className="hero"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="hero-left">
        <h1>Macharla Manikanta</h1>

        <h2>React Developer</h2>

        <p>
          Recent B.Tech IoT Graduate passionate about
          React.js, JavaScript, Node.js and Full Stack Development.
        </p>

        <a href="/resume.pdf" download>
          <button>Download Resume</button>
        </a>
      </div>

      <div className="hero-right">
       <img src="/profile.jpg" alt="profile" />
      </div>

    </motion.section>
  );
}

export default Hero;