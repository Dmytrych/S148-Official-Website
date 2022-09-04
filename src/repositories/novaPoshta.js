import {GET, fetchFrom, POST} from './apiRequestUtils'

export function getCities(){
    fetchFrom("/TestApi/Test", POST).then(x => console.log(x));
}