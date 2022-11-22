import { useEffect } from 'react';
import { useState } from 'react';
import { locale } from '../../locale/ua';
import { getCities } from '../../repositories/api';
import CustomAutocomplete from '../CustomAutocomplete';
import './index.css';

const minStringLength = 3

function CityAutocomplete() {
    const [loadingInProcess, setLoadingInProcess] = useState(false)
    const [filterValue, setFilterValue] = useState("")
    const [options, setOptions] = useState([])

    const onFilterChanged = async (event, newInputValue) => {
        setFilterValue(newInputValue)
    }

    const updateCityOptions = async (newInputValue) => {
        if (newInputValue && newInputValue.length >= minStringLength) {
            setLoadingInProcess(true)
            var cities = await getCities(newInputValue)
            setOptions(cities)
            setLoadingInProcess(false)
        }
    }

    useEffect(() => {
        const timeoutId = setTimeout(() => updateCityOptions(filterValue), 1000);
        return () => clearTimeout(timeoutId);
    }, [filterValue]);

    const getOptionLabel = (option) => option.description;

    return (
        <CustomAutocomplete
            loading={loadingInProcess}
            options={options}
            label={locale.city}
            getOptionLabel={getOptionLabel}
            onFilterChanged={onFilterChanged} />
    )
}

export default CityAutocomplete;