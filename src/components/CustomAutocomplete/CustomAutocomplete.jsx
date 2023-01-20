import { Autocomplete, Box, TextField } from '@mui/material';
import { useEffect } from 'react';
import { useState } from 'react';
import { noop } from '../../utils';
import './index.css';

function CustomAutocomplete(
    {
        minStringLength = 3,
        label = "a",
        loadingText = "loading...",
        noOptionsText = "No options",
        userInputSerchStartDelay = 500,
        getOptions = async (_) => {},
        getOptionLabel = noop,  
        onChange = noop,
        error = false,
        ...props
    }) {
    const [filterValue, setFilterValue] = useState("")
    const [options, setOptions] = useState([])
    const [loadingInProcess, setLoadingInProcess] = useState(false)

    const onFilterChanged = async (event, newInputValue) => {
        setFilterValue(newInputValue)
    }

    const clearOptions = () => setOptions([])

    const updateCityOptions = async (newInputValue) => {
        clearOptions() // The loading message is shown only if options array is clear
        if (newInputValue && newInputValue.length >= minStringLength) {
            setLoadingInProcess(true)
            var retrievedOptions = await getOptions(newInputValue)
            setOptions(retrievedOptions)
            setLoadingInProcess(false)
        }
    }

    useEffect(() => {
        const timeoutId = setTimeout(() => updateCityOptions(filterValue), userInputSerchStartDelay);
        return () => clearTimeout(timeoutId);
    }, [filterValue]);

    return (
        <Autocomplete
            {...props}
            freeSolo={true}
            onChange={onChange}
            disablePortal
            options={options}
            renderInput={(params) => <TextField {...params} label={label} error={error} variant="filled" />}
            loading={loadingInProcess}
            loadingText={loadingText}
            noOptionsText={noOptionsText}
            onInputChange={onFilterChanged}
            getOptionLabel={getOptionLabel}/>
    )
}

export default CustomAutocomplete;