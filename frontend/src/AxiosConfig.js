import axios from 'axios';

const app = axios.create({
    baseURL: "http://localhost:3001/api/v1",
    withCredentials: true
})

app.interceptors.response.use(
    response => {
      return response;
    }, 
    error => {
      return Promise.reject(error.response.data)
    }
)

export default app;