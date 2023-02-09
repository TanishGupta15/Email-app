import React from "react";
import "./component.css"
function Input(props) {
    return (
        <div className = "conatiner">
            <div><label className="form-label" >{props.title}</label></div>
            <div><input type="text" value = {props.name} className = {props.Cname}/></div>
        </div>
    )
}

export default Input;
