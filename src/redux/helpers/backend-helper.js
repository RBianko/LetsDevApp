import { get, put, post } from './api-helper'
import * as url from './url-helper'


//PROJECTS
export const getProjects = (ids) =>
    get(url.GET_PROJECTS, {
        params: { ids }
    })

export const getAllProjects = () =>
    get(url.GET_ALL_PROJECTS, {})


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
        params: { project }
    })

export const applyRequest = (request) =>
    put(url.APPLY_REQUEST, {
        params: { request }
    })
export const approveRequest = (request) =>
    put(url.APPROVE_REQUEST, {
        params: { request }
    })
export const declineRequest = (request) =>
    put(url.DECLINE_REQUEST, {
        params: { request }
    })


//USERS
export const getUsers = (ids) =>
    get(url.GET_USERS, {
        params: { ids }
    })

export const getAllUsers = () =>
    get(url.GET_ALL_USERS, {})


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
        params: { user }
    })

export const followToggle = (ids) =>
    put(url.FOLLOW_TOGGLE, {
        params: { ids }
    })