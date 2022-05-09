import axios from "axios";

export const api = axios.create({
    baseURL: 'http://193.168.0.8.:3333',
})