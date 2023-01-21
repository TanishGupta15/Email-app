import React from "react";
import "./component.css"
function Input(props) {
    return (
        <div className = "conatiner">
            <div><label className="form-label" >{props.title}</label></div>
            <div><input type="text" name = {props.name} className = {props.name}/></div>
        </div>
    )
}

export default Input;