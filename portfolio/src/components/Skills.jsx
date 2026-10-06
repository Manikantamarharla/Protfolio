import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaJava,
  FaGitAlt,
  FaGithub
} from "react-icons/fa";

import {
  SiJavascript,
  SiMysql,
  SiMongodb,
  SiPostman
} from "react-icons/si";

function Skills() {
  const skillGroups = [
    {
      title: "Frontend",
      skills: [
        { name: "React.js", level: "react" },
        { name: "JavaScript", level: "javascript" },
        { name: "HTML5", level: "html" },
        { name: "CSS3", level: "css" },
        { name: "Bootstrap", level: "bootstrap" },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: "node" },
        { name: "Express.js", level: "express" },
        { name: "Java", level: "java" },
        { name: "Python", level: "python" },
      ],
    },
    {
      title: "Database",
      skills: [
        { name: "MySQL", level: "mysql" },
        { name: "MongoDB", level: "mongodb" },
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", level: "git" },
        { name: "GitHub", level: "github" },
        { name: "VS Code", level: "vscode" },
        { name: "Postman", level: "postman" },
      ],
    },
  ];

  const getIcon = (skillName) => {
    switch (skillName) {
      case "React.js":
        return <FaReact />;
      case "JavaScript":
        return <SiJavascript />;
      case "HTML5":
        return <FaHtml5 />;
      case "CSS3":
        return <FaCss3Alt />;
      case "Node.js":
        return <FaNodeJs />;
      case "Java":
        return <FaJava />;
      case "MySQL":
        return <SiMysql />;
      case "MongoDB":
        return <SiMongodb />;
      case "Git":
        return <FaGitAlt />;
      case "GitHub":
        return <FaGithub />;
      case "Postman":
        return <SiPostman />;
      default:
        return null;
    }
  };

  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div className="skill-card" key={group.title}>
            <h3>{group.title}</h3>

            {group.skills.map((skill) => (
              <div className="skill" key={skill.name}>
                <p>
                  {getIcon(skill.name)}
                  {skill.name}
                </p>

                <div className="bar">
                  <div className={`fill ${skill.level}`}></div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;