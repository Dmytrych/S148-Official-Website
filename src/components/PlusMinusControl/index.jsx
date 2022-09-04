import React, { useContext, useState } from 'react';
import { getCities } from '../../repositories/novaPoshta';
import RoundButton from '../RoundButton';
import './index.css';

function PlusMinusControl() {
    const [counter, setCounter] = useState(0);
    let increaseCounter = () => {setCounter(counter + 1); getCities();}
    let decreaseCounter = () => setCounter(counter - 1)


    return (
        <div className='plus-minus-control'>
            <div>
                <RoundButton text="-" onClick={decreaseCounter}/>
            </div>
            <div className='plus-minus-control-number'>
                {counter}
            </div>
            <div>
                <RoundButton text="+" onClick={increaseCounter}/>
            </div>
        </div>
    );
}

export default PlusMinusControl;