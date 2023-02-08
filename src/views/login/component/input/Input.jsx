import React from "react";
import './Input.css'

const Input = ({attribute, handleChange, param}) =>{
    return(
        <div>
            <input 
            type={attribute.type} 
            placeholder={attribute.placeholder} 
            name={attribute.name} 
            id={attribute.id} 
            onChange={handleChange} 
            className='regular-style'
            />
        </div>

);
}

export default Input;