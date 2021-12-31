import axios from "axios";
const KEY = 'AIzaSyB3jD7hoULWw9kyy2MEVw_ATq-5v8Ptpqg';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResult: 2,
        key: KEY
    }
})