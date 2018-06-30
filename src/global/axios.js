import axios from 'axios';

const baseURL_ = 'http://localhost:8088/'; // Local Dev
//const baseURL_ = 'http://52.15.54.43:8088/'; // Amazon

const instance = axios.create({
    baseURL: baseURL_
});

export default instance;