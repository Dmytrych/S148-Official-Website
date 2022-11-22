import { Autocomplete, Box, TextField } from '@mui/material';
import { noop } from '../../utils';
import './index.css';

function CustomAutocomplete({ label="a", options=[], loading=false, getOptionLabel=noop, onFilterChanged=noop, ...props }) {
    return (
        <Autocomplete
            {...props}
            disablePortal
            options={options}
            renderInput={(params) => <TextField {...params} label={label} variant="filled" />}
            loading={loading}
            onInputChange={onFilterChanged}
            getOptionLabel={getOptionLabel}/>
    )
}

export default CustomAutocomplete;