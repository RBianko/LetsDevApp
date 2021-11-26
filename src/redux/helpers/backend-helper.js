import { get, put, post } from './api-helper'
import * as url from './url-helper'


//PROJECTS
export const getProjects = (ids) =>
    get(url.GET_PROJECTS, {
        params: { ids }
    })

export const getProjectDetails = (id) =>
    get(url.GET_PROJECT_DETAILS, {
        params: { id }
    })

export const addProject = (project) =>
    post(url.ADD_PROJECT, {
        params: { project }
    })

export const updateProject = (project) =>
    put(url.UPDATE_PROJECT, {
        params: {
            id: project._id,
            project
        }
    })

//USERS
export const getUsers = (ids) =>
    get(url.GET_USERS, {
        params: { ids }
    })


export const getUser = (id) =>
    get(url.GET_USER, {
        params: { id }
    })

export const getCurrentUser = (id) =>
    get(url.GET_USER, {
        params: { id }
    })

export const updateUserInfo = (user) =>
    put(url.UPDATE_USER_INFO, {
        params: {
            id: user._id,
            user
        }
    })

export const followToggle = (ids) =>
    put(url.FOLLOW_TOGGLE, {
        params: {
            ids
        }
    })