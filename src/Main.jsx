import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import "./css/App.css";

function Main({ page, homeRef, aboutRef, skillsRef, projectsRef, contactRef }) {
  return (
    <main className="main">
      {page === "Home" && <Home homeRef={homeRef} />}
      {page === "About" && <About aboutRef={aboutRef} />}
      {page === "Skills" && <Skills skillsRef={skillsRef} />}
      {page === "Projects" && <Projects projectsRef={projectsRef} />}
      {page === "Contact" && <Contact contactRef={contactRef} />}
    </main>
  );
}

export default Main;
