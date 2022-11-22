import React from 'react'
import './index.css'

function FormParagraphSign({numberTag = 0, text = ""}){
    return (<div className='form-paragraph-sign'>
        <div className='form-paragraph-circle-number'>{numberTag}</div>
        <div className='form-paragraph-text'>{text}</div>
    </div>)
}

export default FormParagraphSign;