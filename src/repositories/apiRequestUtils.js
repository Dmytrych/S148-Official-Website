export const GET = "GET";
export const POST = "POST";

const backendUrl = process.env.REACT_APP_BACKEND_URL;

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

    return await fetch(backendUrl + urlPostfix, request)
}