import axios from 'axios';

const baseURL = 'http://localhost:4000/api'

const axiosApi = axios.create({
    baseURL
})

axios.interceptors.request.use(function (config) {
    return config
})

axiosApi.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject(error)
)

export async function get(url, config) {
    console.log('axios.get', url)
    return await axiosApi
        .get(url, {
            ...config
        })
        .then((response) => response.data)
}

export async function put(url, config) {
    console.log('axios.post', url)
    return await axiosApi
        .put(url, {
            ...config
        })
        .then((response) => response.data)
}

export async function post(url, config) {
    console.log('axios.post', url)
    return await axiosApi
        .post(url, {
            ...config
        })
        .then((response) => response.data)
}