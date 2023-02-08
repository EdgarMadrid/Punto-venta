import React from "react";
import './Label.css'


const Label = ({label, id}) =>{
    return (
        <div className="container-label">
            <label htmlFor={id}>{label}</label>
        </div>
    );
}

export default Label;