import React from 'react';
import { noop } from '../../utils';
import RoundButton from '../RoundButton';
import './index.css';

function PlusMinusControl({decreaseButtonClick = noop, increaseButtonClick = noop, value}) {
    return (
        <div className='plus-minus-control'>
            <div>
                <RoundButton text="-" onClick={() => decreaseButtonClick()}/>
            </div>
            <div className='plus-minus-control-number'>
                {value}
            </div>
            <div>
                <RoundButton text="+" onClick={() => increaseButtonClick()}/>
            </div>
        </div>
    );
}

export default PlusMinusControl;