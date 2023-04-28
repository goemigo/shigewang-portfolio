import './css/App.css';
import Header from './Header.jsx';
import Main from './Main.jsx';
import Footer from './Footer.jsx';
import { useEffect } from 'react';
import { useState } from "react";
import { useRef } from 'react';


function App() {
  // set the page title
  useEffect(() => {
    document.title = 'Shige Wang Portfolio';
  }, []);

  const [page, setPage] = useState('Home');

  // const mainRef = useRef();
  const homeRef = useRef();
  const aboutRef = useRef();
  const skillsRef = useRef();
  const projectsRef = useRef();
  const contactRef = useRef();

  const handleSkipLinkClick = (e) => {
    e.preventDefault();
    if (page==="Home") {homeRef.current.focus();}
    if (page==="About") {aboutRef.current.focus();}
    if (page==="Skills") {skillsRef.current.focus();}
    if (page==="Projects") {projectsRef.current.focus();}
    if (page==="Contact") {contactRef.current.focus();}

  }
  
  return (
    <div className="app">
      <a href="#main" className='skip-to-main' onClick={handleSkipLinkClick}>Skip to main content</a>
      <Header setPage={setPage}/>
      <Main page={page} setPage={setPage} homeRef={homeRef} aboutRef={aboutRef} skillsRef={skillsRef} projectsRef={projectsRef} contactRef={contactRef}/>
      <Footer/>
    </div>
  );
}

export default App;
