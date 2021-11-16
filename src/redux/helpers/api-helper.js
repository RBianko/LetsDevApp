import axios from 'axios';

const baseURL = 'http://localhost/5000'
const authUrl = '/api/login/authorization'
const regUrl = '/api/login/registration'
const projectsUrl = '/api/projects'
const usersUrl = '/api/users'

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
    return await axiosApi
        .get(url, {
            ...config
        })
        .then((response) => response.data)
}