import "./css/Skills.css";
import skill from "./skill";
import { useState } from "react";

function Skills({ skillsRef }) {
  const [activeIndices, setActiveIndices] = useState([]);

  const onAccordionClick = (index) => {
    if (activeIndices.includes(index)) {
      setActiveIndices(activeIndices.filter((i) => i !== index));
    } else {
      setActiveIndices([...activeIndices, index]);
    }
  };

  const getIndicator = (index, indicator = "+") => {
    if (activeIndices.includes(index)) {
      indicator = "-";
    }
    return <span className="indicator">{indicator}</span>;
  };

  const skillsAccordion = skill.map((item, index) => {
    return (
      <div
        className={`accordion-item ${
          activeIndices.includes(index) ? "active" : ""
        }`}
        key={item.topic}
      >
        <button className="toggle" onClick={() => onAccordionClick(index)}>
          {item.topic}
          {getIndicator(index)}
        </button>
        {activeIndices.includes(index) && (
          <div className="accordion-detail">{item.detail}</div>
        )}
      </div>
    );
  });

  return (
    <div className="skills" ref={skillsRef} id="skills" tabIndex="-1">
      <h1 className="skills-heading">My Skills</h1>
      <div className="skills-content">
        <p className="skills-text">
          One of my greatest strengths as a software engineer is my learning
          agility. Throughout my career, I have consistently demonstrated the
          ability to quickly learn new technologies and programming languages,
          adapt to new environments, and apply new skills to solve complex
          problems.
        </p>
        <div className="skills-accordion">{skillsAccordion}</div>
        <p className="experience">
          <span className="exp-number">3 </span>
          <span>Years of working experience</span>
        </p>
      </div>
    </div>
  );
}

export default Skills;
