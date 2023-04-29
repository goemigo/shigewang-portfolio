import "./css/Home.css";

function Home({ homeRef }) {
  return (
    <div className="home" ref={homeRef} id="home" tabIndex="-1">
      <img
        className="home-img"
        src={process.env.PUBLIC_URL + "/images/profile-photo.jpeg"}
        alt="Shige by the sea"
      ></img>
      <div className="home-text">
        <p className="text one">Hello,</p>
        <p className="text two">I'm Shige Wang</p>
        <p className="text three">Software Engineer</p>
      </div>
    </div>
  );
}

export default Home;
