import axios from 'axios';

const ARRANGEMENT_URL = 'http://book-table.papoldesign.pl/index.php';
        
export const GET = (url = ARRANGEMENT_URL) => {
    return axios.get(url);
};

export const POST = (data, url = ARRANGEMENT_URL) => {
    return axios.post(url, data);
};