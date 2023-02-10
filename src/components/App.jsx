import React from "react";
import {useState} from "react";
import Ellipse from "../assets/img/Ellipse.png"
import './component.css'

function App(){
  const [emailSubject, setemailSubject] = useState("");
  const [emailBody, setemailBody] = useState("");
  const [eventID, seteventID] = useState("");
  const [message, setMessage] = useState("");

function handle(){
  console.log("nothing");
}
let handleSubmit = async (e) => {
  e.preventDefault();
  try {
    let res = await fetch("https://pmhwn75uyl.execute-api.ap-south-1.amazonaws.com/dev/send_mail", {
      method: "POST",
      headers : {
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Methods': 'GET, POST',
               'Access-Control-Allow-Headers': 'Content-Type',
           },
      body: JSON.stringify({
        eventID: eventID,
        emailSubject: emailSubject,
        emailBody: emailBody,
      }),
    });
    let resJson = await res.json();
    if (res.status === 200) {
      setemailSubject("");
      setemailBody("");
      seteventID("");
      setMessage("User created successfully");
    } else {
      setMessage("Some error occured");
    }
  } catch (err) {
    console.log(err);
  }
};
    return (
        <form className="form form-main" onSubmit = {handleSubmit}>
            <h1 className="form-head">Compose Mail <img src={Ellipse} alt="just a ellipse" /></h1>
            <div className = "conatiner">
                <div><label className="form-label" >Email Subject</label></div>
                <div><input type="text" value = {emailSubject} className ="form-input" onChange={(e) => setemailSubject(e.target.value)} /></div>
            </div>
            <div className = "conatiner">
                <div><label className="form-label" >Email Body</label></div>
                <div><input type="text" value = {emailBody} className = "form-content" onChange={(e) => setemailBody(e.target.value) } /></div>
            </div>
            <div className = "conatiner">
                <div><label className="form-label" >Event ID</label></div>
                <div><input type="text" value = {eventID} className = "form-input" onChange={(e) => seteventID(e.target.value)}/></div>
            </div>
            <div style={{ display: 'flex', marginTop: '5px' }}>
				<button type="submit" className='form-button'>
					Submit
				</button >
			</div>
      <div className="message">{message ? <p>{message}</p> : null}</div>
        </form>
    )
}
export default App;
