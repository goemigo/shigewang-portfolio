import { useState } from 'react';
import './css/Modal.css';

function Modal({ dialogRef }) {

  function close(e) {
    dialogRef.current.close();
    e.preventDefault();
    setFormSubmitted(false);
  }

  const [selectValue, setSelectValue] = useState('');
  const [topicDetail,setTopicDetail] = useState('');
  function selectionChange (e) {
    setSelectValue(e.target.value);
    const selectedIndex = e.target.selectedIndex;
    const selectedOption = e.target.options[selectedIndex];
    setTopicDetail((selectedIndex!==3)? selectedOption.textContent: "Talk about Other topic");

  }

  const href = `mailto:wang.shig@northeastern.edu?subject=${topicDetail}`;
  function sendEmail(e){
    setFormSubmitted(true);
    validateAllFields();
    if(hasInvalidField){
      e.preventDefault();
    }else{
      window.open(href,"_blank");
    }
  }

  const [nameValue, setNameValue] =useState('');
  function nameChange (e) {
    setNameValue(e.target.value);
    validateAllFields();
  }

  const [emailValue, setEmailValue] =useState('');
  const [emailFormInvalid, setEmailFormInvalid] =useState(true);
  function emailValueChange (e) {
    setEmailValue(e.target.value);
    validateAllFields();
  }

  function emailBlurValidate(e) {
    (e.target.value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) ? setEmailFormInvalid(false): setEmailFormInvalid(true);
    validateAllFields();
  }

  const [hasInvalidField,setHasInvalidField] = useState(true);
  function validateAllFields(){
    if (nameValue==='' || emailValue===''){
      setHasInvalidField(true);
    }
    else if (emailFormInvalid===false){
      setHasInvalidField(false);
    }else {
      setHasInvalidField(true);
    }
  }

  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <div>
      <dialog ref={dialogRef} className="dialog">
        <form className="form" onSubmit={(e)=>{e.preventDefault(); setFormSubmitted(true);}}>
            <div className="fields">
                <div className="field register-name">
                    <label htmlFor="name" className="label requied">Name</label>
                    <input className="input register-name-input" id="name" type="text" name="name" value={nameValue} onChange={nameChange}/>
                    {/* conditional render of name error msg */}
                    {nameValue==='' && formSubmitted && <span className='name-error'>name is required</span>}
                </div>
            
                <div className="field register-email">
                    <label htmlFor="email" className="label requied">Email</label>
                    <input className="input register-email-input" id="email" type="text" name="email" value={emailValue} onBlur={emailBlurValidate} onChange={emailValueChange} />
                    {/* conditional render of email error msg */}
                    {emailValue==='' && formSubmitted && <span className='email-error'>email is required</span>}
                    {emailValue !=='' && emailFormInvalid && formSubmitted && <span className='email-error'>email form incorrect</span>}
                </div>
                <div className='field register-topic'>
                    <label htmlFor='topic' className="label">What would you like to talk about?</label>
                    <select className="input" id="topic" name="topic" value={selectValue} onChange={selectionChange}>
                        <option value="">Please select</option>
                        <option value="1">Project collaboration</option>
                        <option value="2">Career opportunity</option>
                        <option value="3">Other</option>
                    </select>
                </div>
                {/* conditional render of a textbox */}
                {selectValue==="3" && 
                    <div className='field topic-text'>
                        <label htmlFor='text' className="label">Topic of your interest</label>
                        <textarea className='input text-area' id="text" name="text" rows="4" cols="30"></textarea>
                    </div>
                }
                <div className='buttons'>
                    {/* finish this outside final{showIndicator && <span className="indicator">Submitted!</span>} */}
                    <button type="button" onClick={close} className="button close">Close</button>
                    {/* <button type="submit" 
                    className="button submit">
                      Submit
                    </button> */}
                    <button type="submit" className="button submit" onClick={sendEmail}>Submit</button>
                </div>
                <span className='instruction'>indicates required field</span>
            </div>
        </form>
      </dialog>
    </div>
  );
}
export default Modal;
