import { sleep } from "../../../utils"

export async function getCities(filter) {
    await sleep(1000)
    return Promise.resolve(fakeCities.filter(city => city.description.includes(filter)))
}

export async function getPostOffices(filter) {
    await sleep(1000)
    return Promise.resolve(fakeWarehouses.filter(warehouse => warehouse.name.includes(filter)))
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
        name: "Відділення №7 (до 10 кг): вул. Гната Хоткевича, 8 (м.Чернігівська)",
        warehouseGuidRef: "1ec09d6b-e1c2-11e3-8c4a-0050568002cf"
    },
    {
        name: "Відділення №8 (до 30 кг на одне місце): вул. Набережно-Хрещатицька, 33",
        warehouseGuidRef: "1ec09d6a-e1c2-11e3-8c4a-0050568002cf"
    },
    {
        name: "Відділення №9: пров. В'ячеслава Чорновола, 54а (р-н Жулянського мосту)",
        warehouseGuidRef: "511fcfd1-e1c2-11e3-8c4a-0050568002cf"
    },
    {
        name: "Відділення №10: вул. Василя Жуковського, 22А",
        warehouseGuidRef: "1972050e-1cc7-11e6-971e-005056887b8d"
    },
    {
        name: "Відділення №12: вул. Якутська, 8",
        warehouseGuidRef: "731a002c-3ed2-11e6-a9f2-005056887b8d"
    },
    {
        name: "Відділення №14: вул. Миколи Кибальчича, 23/25",
        warehouseGuidRef: "39931b75-e1c2-11e3-8c4a-0050568002cf"
    },
    {
        name: "Відділення №26 (до 30 кг): вул. Бойчука, 34",
        warehouseGuidRef: "1692285a-e1c2-11e3-8c4a-0050568002cf"
    },
    {
        name: "Відділення №27 (до 30 кг): просп. Василя Порика, 13в (Виноградар)",
        warehouseGuidRef: "1692285f-e1c2-11e3-8c4a-0050568002cf"
    },
    {
        name: "Відділення №28 (до 30 кг): вул. Сім'ї Сосніних, 7а",
        warehouseGuidRef: "16922860-e1c2-11e3-8c4a-0050568002cf"
    },
    {
        name: "Відділення №29 (до 30 кг): вул. Васильківська, 34 (корпус В)",
        warehouseGuidRef: "16922861-e1c2-11e3-8c4a-0050568002cf"
    },
    {
        name: "Відділення №30 (до 30 кг): вул. Привокзальна, 12",
        warehouseGuidRef: "4049833d-e1c2-11e3-8c4a-0050568002cf"
    },
    {
        name: "Відділення №31 (до 30 кг): вул. Московська, 5/2а, (м. \"Арсенальна\")",
        warehouseGuidRef: "0d545f63-e1c2-11e3-8c4a-0050568002cf"
    },
    {
        name: "Відділення №32 (до 30 кг): бульв. Дарницький, 23",
        warehouseGuidRef: "9303ca2e-1cc7-11e6-971e-005056887b8d"
    },
    {
        name: "Відділення №34 (до 30 кг): просп. Повітрофлотський, 34",
        warehouseGuidRef: "79c06547-c8a7-11e4-a77a-005056887b8d"
    },
    {
        name: "Відділення №35 (до 30 кг): вул. Фучіка, 3 (ЦСКА)",
        warehouseGuidRef: "511fcfda-e1c2-11e3-8c4a-0050568002cf"
    },
    {
        name: "Відділення №36 (до 30 кг): вул. Олени Теліги, 31/1",
        warehouseGuidRef: "0d545f76-e1c2-11e3-8c4a-0050568002cf"
    },
    {
        name: "Відділення №37 (до 30 кг на одне місце): вул. Празька, 24",
        warehouseGuidRef: "1ec09d44-e1c2-11e3-8c4a-0050568002cf"
    },
    {
        name: "Відділення №38: вул. Дніпровська набережна, 17Ж",
        warehouseGuidRef: "1ec09d45-e1c2-11e3-8c4a-0050568002cf"
    },
    {
        name: "Відділення №39 (до 30 кг): вул. Маршала Малиновського, 34а",
        warehouseGuidRef: "1ec09d4e-e1c2-11e3-8c4a-0050568002cf"
    }
]

