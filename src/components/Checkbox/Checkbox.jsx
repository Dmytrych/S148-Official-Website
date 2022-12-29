import React, { useState } from 'react';
import { noop } from '../../utils';
import RadioButtonIcon from '../RadioButtonIcon';
import './index.css'

function Checkbox({ label = 'Label', checkedDefault = false, onClick = noop }) {
    const [checked, setChecked] = useState(checkedDefault)

    const handleClick = () => {
        onClick({checked})
        setChecked(!checked)
    }

    return (
        <div className='checkbox' onClick={handleClick}>
            <RadioButtonIcon checked={checked}/>
            <span>{label}</span>
        </div>
    );
}

export default Checkbox;