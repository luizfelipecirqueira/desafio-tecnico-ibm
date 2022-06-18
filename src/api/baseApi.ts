import Axios from 'axios';

const baseApi = Axios.create({ baseURL: 'https://www.googleapis.com/books/v1/volumes?q=' });

export default baseApi;