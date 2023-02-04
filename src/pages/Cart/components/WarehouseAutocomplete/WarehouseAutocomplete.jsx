import CustomAutocomplete from '../../../../components/CustomAutocomplete';
import { locale } from '../../../../locale/ua';
import { getWarehouseByNumber } from '../../../../repositories/api';

const minStringLength = 1
const loadingText = locale.loading
const no_warehouses_found_text = locale.no_matches_found

function WarehouseAutocomplete({cityName, cityGuidRef, setWarehouseSelection, value="", error = false}) {
    const getOptionLabel = (warehouse) => warehouse ? warehouse.name.toString() : "";

    return (
        <CustomAutocomplete
            minStringLength={minStringLength}
            loadingText={loadingText}
            getOptions={async (warehouseNumber) => {
                if(isNaN(warehouseNumber)){
                    return Promise.resolve([])
                }
                const warehouse = await getWarehouseByNumber(cityName, cityGuidRef, warehouseNumber);
                return warehouse ? [warehouse] : Promise.resolve([])
            }}
            noOptionsText={no_warehouses_found_text}
            label={locale.warehouse_info}
            getOptionLabel={getOptionLabel}
            onChange={(event, value) => setWarehouseSelection(value)}
            error={error} 
            value={value}/>
    )
}

export default WarehouseAutocomplete;