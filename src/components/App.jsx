import React from "react";
import Input from "./Input"
import Ellipse from "../assets/img/Ellipse.png"
import './component.css'
import { Card, Form, Button } from 'react-bootstrap';

function App(){
    return (
        <form className="form form-main" method="post" action="/">
            <h1 className="form-head">Compose Mail <img src={Ellipse} /></h1>
            
            <Input title = "Email Subject"  name="form-input" />
            <Input title = "Email Body" name = "form-content" />
            <Input title = "Event ID" name ="form-input" />
            <div style={{ display: 'flex', marginTop: '5px' }}>
				<Button className='form-button' >
					Submit
				</Button>
			</div>
        </form>
    )
}
export default App;