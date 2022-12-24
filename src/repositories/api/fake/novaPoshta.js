import { sleep } from "../../../utils"

export async function getCities(filter) {
    await sleep(1000)
    return Promise.resolve(fakeCities.filter(city => city.description.includes(filter)))
}

export async function getWarehouseByNumber(cityName, cityRef, warehouseNumber) {
    await sleep(1000)
    console.log(warehouseNumber);
    let warehouse = fakeWarehouses.find(fakeWarehouse => fakeWarehouse.warehouseNumber.toString() === warehouseNumber)
    console.log(warehouse)
    return Promise.resolve({
        name: warehouse.name,
        warehouseGuidRef: warehouse.warehouseGuidRef
    })
}

const fakeCities = [
    {
        description: "місто Київ",
        cityGuidRef: "2eefee63-f630-41fd-b44c-843d49ccd689",
        name: "Київ"
    },
    {
        description: "місто Київець",
        cityGuidRef: "dc019722-2ecb-48c5-a2b9-188315c778ff",
        name: "Київець"
    },
    {
        description: "місто Житомир",
        cityGuidRef: "3a33049d-af89-493a-a1b9-071a98f2043e",
        name: "Житомир"
    },
    {
        description: "місто Київунька",
        cityGuidRef: "6ab555a5-fbc7-4e73-b535-13214cce8f5e",
        name: "Київунька"
    },
    {
        description: "місто Київун",
        cityGuidRef: "42b7a1b5-f4df-45fb-a6d0-aa90999e0a46",
        name: "Київун"
    },
    {
        description: "місто Київуй",
        cityGuidRef: "69c465d3-8427-4475-8f79-606a27ab74aa",
        name: "Київуй"
    },
    {
        description: "місто Київооооо",
        cityGuidRef: "c091304a-bb8a-4a39-b1ad-7c839812cc3c",
        name: "Київооооо"
    },
    {
        description: "місто Кієв",
        cityGuidRef: "9351c134-c707-4c25-96aa-03d6f72c6072",
        name: "Кієв"
    },
    {
        description: "місто Кийов",
        cityGuidRef: "404c7ae1-9acf-45d7-bbec-1a3496f56108",
        name: "Кийов"
    },
    {
        description: "місто Киїєв",
        cityGuidRef: "66001764-0822-4e5a-91ce-8e77fd1aeac9",
        name: "Киїєв"
    }
]

const fakeWarehouses = [
    {
        cityName: "Київ",
        cityGuidRef: "2eefee63-f630-41fd-b44c-843d49ccd689",
        name: "Відділення №7 (до 10 кг): вул. Гната Хоткевича, 8 (м.Чернігівська)",
        warehouseGuidRef: "1ec09d6b-e1c2-11e3-8c4a-0050568002cf",
        warehouseNumber: 7
    },
    {
        cityName: "Київeць",
        cityGuidRef: "dc019722-2ecb-48c5-a2b9-188315c778ff",
        name: "Відділення №8 (до 30 кг на одне місце): вул. Набережно-Хрещатицька, 33",
        warehouseGuidRef: "1ec09d6a-e1c2-11e3-8c4a-0050568002cf",
        warehouseNumber: 8
    },
    {
        cityName: "Київунька",
        cityGuidRef: "6ab555a5-fbc7-4e73-b535-13214cce8f5e",
        name: "Відділення №9: пров. В'ячеслава Чорновола, 54а (р-н Жулянського мосту)",
        warehouseGuidRef: "511fcfd1-e1c2-11e3-8c4a-0050568002cf",
        warehouseNumber: 9
    }
]

