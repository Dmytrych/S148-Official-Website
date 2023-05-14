import * as React from 'react';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import { IconButton, styled } from '@mui/material';
import { noop } from '../../utils';
import { useState } from 'react';

const limit = 200;

type PlusMinusControlInput = {
    onChange: (newQuantity: number) => void,
    defaultValue?: number
}

function PlusMinusControl({onChange = noop, defaultValue = 1}: PlusMinusControlInput) {
    const [value, setValue] = useState(defaultValue)

    const handleDecrease = () => {
        const newValue = value > 1 ? value - 1 : 1
        setValue(newValue)
        onChange(newValue)
    }

    const handleIncrease = () => {
        const newValue = value < limit ? value + 1 : value
        setValue(newValue)
        onChange(newValue)
    }

    return (
        <ControlContainer>
            <IconButton onClick={handleDecrease}><RemoveCircleOutlineOutlinedIcon /></IconButton>
            <ValueContainer>
                {value}
            </ValueContainer>
            <IconButton onClick={handleIncrease}><AddCircleOutlineOutlinedIcon /></IconButton>
        </ControlContainer>
    );
}

const ValueContainer = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '20px'
})

const ControlContainer = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: 'fit-content'
})

export default PlusMinusControl;