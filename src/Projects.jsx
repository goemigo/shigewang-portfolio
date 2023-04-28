import "./css/Projects.css";
import cards from "./cards";

function Projects({ projectsRef }) {
  const card = cards.map((item) => {
    return (
      <div className="card" key={item.title}>
        <img className="card-pic" src={item.path} alt={item.alt}></img>
        <h2 className="card-title">{item.title}</h2>
        <p className="card-text">{item.text}</p>
        <a
          className="card-link"
          href={item.linkPath}
          rel="noreferrer"
          target="_blank"
        >
          {item.linkName}
        </a>
      </div>
    );
  });

  return (
    <div className="projects" ref={projectsRef} id="projects" tabIndex="-1">
      <h1 className="projects-heading">My Projects</h1>
      <div className="cards">{card}</div>
    </div>
  );
}

export default Projects;
