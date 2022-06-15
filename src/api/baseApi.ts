//import axios, { axiosInstance } from 'axios';

/*export class baseApi {

    BASE_URL = "https://www.googleapis.com/books/v1/volumes?q=search+terms";
    protected api: AxiosInstance;


    constructor(){
        this.api = Axios.create({
            baseURL: this.BASE_URL,
            timeout: 3000
        })
    }
}*/

/*import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://www.googleapis.com/books/v1/volumes?q=search+terms'
});

export const api = {
    getAllPosts: async () => {
        let response = await axios.get(`/posts`);
        return response.data;
    }
}*/

export const api = {
    getAllLivros: async () => {
        let response = await fetch('https://www.googleapis.com/books/v1/volumes?q=search+terms');
        let json = await response.json();
        return json;
    }
}

