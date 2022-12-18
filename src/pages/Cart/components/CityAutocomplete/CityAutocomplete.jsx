import CustomAutocomplete from '../../../../components/CustomAutocomplete';
import { locale } from '../../../../locale/ua';
import { getCities } from '../../../../repositories/api';

const loadingText = locale.loading
const no_cities_found_text = locale.no_matches_found

function CityAutocomplete() {
    const getOptionLabel = (city) => city.description;

    return (
        <CustomAutocomplete
            loadingText={loadingText}
            getOptions={getCities}
            noOptionsText={no_cities_found_text}
            label={locale.city}
            getOptionLabel={getOptionLabel} />
    )
}

export default CityAutocomplete;