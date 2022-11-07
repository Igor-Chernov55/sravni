import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.realworld.io/api'
})

interface AxiosConfigType {
    headers: {
        Authorization: string
    }
}

instance.interceptors.request.use((config: any) => {
    config.headers.Authorization = `Bearer ${window.localStorage.getItem('token')}`

    return config
})

export default instance
