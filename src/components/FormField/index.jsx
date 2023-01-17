import React from "react";
import { noop } from "../../utils";
import './index.css'

const FormField = ({label = "", error = false, value = "", errorText = "", className = "", ...props}) => {
    return (
        <div className={`form-element-container ${className}`}>
            {label ? <span className="form-element-header">{label}</span> : <></>}
            <div className={`form-field-input-outlined ${error && 'form-field-input-outlined-error'}`}>
                <input className="form-field-internal-input" type="text" {...props}/>
            </div>
            {error ? <span className="form-element-error-text">{errorText}</span> : <></>}
        </div>
    )
}

export default FormField;