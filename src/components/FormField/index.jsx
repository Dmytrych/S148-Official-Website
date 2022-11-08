import React from "react";
import './index.css'

const FormField = ({header = "", error = false, errorText = "", placeholder = "", className = "",onChange}) => {
    return (
        <div className={`form-element-container ${className}`}>
            <span className="form-element-header">{header}</span>
            <input className="form-element-default form-field-input" type="text" placeholder={placeholder} onChange={onChange}/>
            {error ? <span className="form-element-error-text">{errorText}</span> : <></>}
        </div>
    )
}

export default FormField;