import axios from 'axios';

const baseURL = 'http://localhost:4000/api'
const authUrl = '/login/authorization'
const regUrl = '/login/registration'
const projectsUrl = '/projects'
const usersUrl = '/users'

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