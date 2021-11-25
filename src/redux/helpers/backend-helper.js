import { get, put } from './api-helper'
import * as url from './url-helper'

export const getProjects = (ids) =>
    get(url.GET_PROJECTS, {
        params: { ids } //state
    })

export const getUsers = (ids) =>
    get(url.GET_USERS, {
        params: { ids } //state
    })

export const getProjectDetails = (id) =>
    get(url.GET_PROJECT_DETAILS, {
        params: { id } //state
    })

export const getUser = (id) =>
    get(url.GET_USER, {
        params: { id } //state
    })

export const getCurrentUser = (id) =>
    get(url.GET_USER, {
        params: { id } //state
    })

export const updateUserInfo = (user) =>
    put(url.UPDATE_USER_INFO, {
        params: {
            id: user._id,
            user
        }
    })

export const updateProject = (project) =>
    put(url.UPDATE_USER_INFO, {
        params: {
            id: project._id,
            project
        }
    })