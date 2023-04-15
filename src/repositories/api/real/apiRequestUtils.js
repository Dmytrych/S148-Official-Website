import { appSettings } from "../../../appSettings";

export const GET = "GET";
export const POST = "POST";

const backendUrl = appSettings.backendUrl;

export async function fetchFrom(urlPostfix, method, data) {
    var request = {
        method: method,
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': '*'
        }
    }

    if(data && method !== GET){
        request.body = JSON.stringify(data)
    }

    let response = await fetch(backendUrl + urlPostfix, request)

    return response.ok ? response.json() : undefined
}