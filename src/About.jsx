import "./css/About.css";

function About({ aboutRef }) {
  return (
    <div className="about" ref={aboutRef} id="about" tabIndex="-1">
      <h1 className="about-heading">About Me</h1>
      <div className="about-content">
        <img
          className="about-img"
          src= {process.env.PUBLIC_URL + "/images/about-photo.jpeg"}
          alt="me wearing a blue shirt sitting on a ship"
        ></img>
        <p className="about-text">
          I am a highly motivated data analyst transitioning to a software
          engineering role with a Master’s degree in Information Systems (in
          progress). With three years of experience as a business analyst and
          data analyst at a tech startup, I bring to the table strong analytical
          expertise while finding innovative software solutions for
          problem-solving. I am excited to continue building on my existing
          skillset while learning new technologies and approaches to software
          development. I am committed to staying at the forefront of
          cutting-edge technologies and applying my knowledge to develop
          creative and efficient software solutions.
        </p>
      </div>
    </div>
  );
}

export default About;
