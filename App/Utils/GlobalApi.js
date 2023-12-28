import axios from "axios";

const BASE_URL = "https://places.googleapis.com/v1/places:searchNearby";
const API_KEY ="AIzaSyAR7hBCTRGcB9hMB-_heZMTfee0tIh_Fw4";

const config ={
    headers: {
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': API_KEY,
        'X-Goog-FieldMask':[
            'places.displayName', 
            'places.formattedAddress',
            'places.location',
            'places.evChargeOptions',
            'places.photos']
    }
}

const NearByPlace = (data)=>axios.post(BASE_URL,data,config);

export default {
    NearByPlace,
    API_KEY
}