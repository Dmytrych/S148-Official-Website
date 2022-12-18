import CustomAutocomplete from '../../../../components/CustomAutocomplete';
import { locale } from '../../../../locale/ua';
import { getPostOffices } from '../../../../repositories/api';

const minStringLength = 1;
const loadingText = locale.loading
const no_warehouses_found_text = locale.no_matches_found

function WarehouseAutocomplete() {
    const getOptionLabel = (warehouse) => warehouse.name;

    return (
        <CustomAutocomplete
            minStringLength={minStringLength}
            loadingText={loadingText}
            getOptions={getPostOffices}
            noOptionsText={no_warehouses_found_text}
            label={locale.city}
            getOptionLabel={getOptionLabel} />
    )
}

export default WarehouseAutocomplete;