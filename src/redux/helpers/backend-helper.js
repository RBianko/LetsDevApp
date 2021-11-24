import { get, put } from './api-helper'
import * as url from './url-helper'

export const getProjects = () => get(url.GET_PROJECTS)
export const getUsers = () => get(url.GET_USERS)

export const getProjectDetails = (id) =>
    get(url.GET_PROJECT_DETAILS, {
        params: { id: id } //state
    })

export const getUser = (id) =>
    get(url.GET_USER, {
        params: { id: id } //state
    })

export const getCurrentUser = (id) =>
    get(url.GET_USER, {
        params: { id: id } //state
    })

export const updateUserInfo = (user) =>
    put(url.UPDATE_USER_INFO, {
        params: {
            id: user._id,
            user: user
        }
    })