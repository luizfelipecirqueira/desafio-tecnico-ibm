import Axios, { AxiosInstance } from 'axios';

export class baseApi {

    private readonly BASE_URL = "https://www.googleapis.com/books/v1/volumes?q=search+terms";
    protected api: AxiosInstance;


    constructor(){
        this.api = Axios.create({
            baseURL: this.BASE_URL,
            timeout: 3000
        })
    }
}

