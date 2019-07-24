import axios from 'axios';

const app = axios.create({
    baseURL: "http://localhost:3001/api/v1",
    withCredentials: true
})

export default app;