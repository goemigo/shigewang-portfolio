import "./css/Contact.css";
import Modal from "./Modal.jsx";
import { useRef } from "react";

function Contact({ contactRef }) {
  const dialogRef = useRef();
  function openDialog() {
    dialogRef.current.showModal();
  }

  return (
    <div className="contact" ref={contactRef} id="contact" tabIndex="-1">
      <h1 className="contact-heading">Contact Me</h1>
      <div className="contact-text">
        <h2>Chat With Me?</h2>
        <p>
          You can email me at{" "}
          <span className="my-email">wang.shig@northeastern.edu</span> to talk
          about any potential projects or opportunities.
        </p>
        {/* <p>Or you can leave me your contact information by clicking the button below, and I will get in touch!</p> */}
        <button className="contact-button" type="button" onClick={openDialog}>
          Contact me
        </button>
        <Modal dialogRef={dialogRef} />
      </div>
    </div>
  );
}

export default Contact;
