export function getCities(filter){
    return Promise.resolve(fakeCities.filter(city => city.description.includes(filter)))
}

const fakeCities = [
    {
        description: "Київ",
        cityGuidRef: "2eefee63-f630-41fd-b44c-843d49ccd689"
    },
    {
        description: "Київець",
        cityGuidRef: "dc019722-2ecb-48c5-a2b9-188315c778ff"
    },
    {
        description: "Житомир",
        cityGuidRef: "3a33049d-af89-493a-a1b9-071a98f2043e"
    },
    {
        description: "Київунька",
        cityGuidRef: "6ab555a5-fbc7-4e73-b535-13214cce8f5e"
    },
    {
        description: "Київун",
        cityGuidRef: "42b7a1b5-f4df-45fb-a6d0-aa90999e0a46"
    },
    {
        description: "Київуй",
        cityGuidRef: "69c465d3-8427-4475-8f79-606a27ab74aa"
    },
    {
        description: "Київооооо",
        cityGuidRef: "c091304a-bb8a-4a39-b1ad-7c839812cc3c"
    },
    {
        description: "Кієв",
        cityGuidRef: "9351c134-c707-4c25-96aa-03d6f72c6072"
    },
    {
        description: "Кийов",
        cityGuidRef: "404c7ae1-9acf-45d7-bbec-1a3496f56108"
    },
    {
        description: "Киїєв",
        cityGuidRef: "66001764-0822-4e5a-91ce-8e77fd1aeac9"
    }
]

