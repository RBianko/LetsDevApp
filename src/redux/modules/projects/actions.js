import {
    GET_PROJECTS,
    GET_ALL_PROJECTS,
    GET_PROJECTS_SUCCESS,
    GET_PROJECTS_FAIL,
    GET_PROJECT_DETAILS,
    GET_PROJECT_DETAILS_SUCCESS,
    GET_PROJECT_DETAILS_FAIL,
    ADD_PROJECT,
    ADD_PROJECT_SUCCESS,
    ADD_PROJECT_FAIL,
    UPDATE_PROJECT,
    UPDATE_PROJECT_SUCCESS,
    UPDATE_PROJECT_FAIL,
    APPLY_REQUEST,
    APPROVE_REQUEST,
    DECLINE_REQUEST,
    REQUEST_SUCCESS,
    REQUEST_FAIL,
    DELETE_PROJECT,
    DELETE_PROJECT_SUCCESS,
    DELETE_PROJECT_FAIL,
} from '../../action-types'
import { toast } from 'react-toastify';
import locale from '../../../locale/en'
const { notification } = locale.translation

export const getProjects = (ids) => ({
    type: GET_PROJECTS,
    payload: ids
})

export const getAllProjects = (page) => ({
    type: GET_ALL_PROJECTS,
    payload: page
})

export const getProjectsSuccess = (projects) => ({
    type: GET_PROJECTS_SUCCESS,
    payload: projects
})

export const getProjectsFail = (error) => ({
    type: GET_PROJECTS_FAIL,
    payload: error
})

export const getProjectDetails = (id) => ({
    type: GET_PROJECT_DETAILS,
    payload: id
})

export const getProjectDetailsSuccess = (project) => ({
    type: GET_PROJECT_DETAILS_SUCCESS,
    payload: project
})

export const getProjectDetailsFail = (error) => ({
    type: GET_PROJECT_DETAILS_FAIL,
    payload: error
})

export const addProject = (project) => ({
    type: ADD_PROJECT,
    payload: project
})

export const addProjectSuccess = () => {
    toast.success(notification.projectCreated)
    return {
        type: ADD_PROJECT_SUCCESS
    }
}

export const addProjectFail = (error) => {
    toast.error(error)
    return {
        type: ADD_PROJECT_FAIL,
        payload: error
    }
}

export const updateProject = (project) => ({
    type: UPDATE_PROJECT,
    payload: project
})

export const updateProjectSuccess = () => {
    toast.success(notification.projectUpdated)
    return {
        type: UPDATE_PROJECT_SUCCESS,
    }
}

export const updateProjectFail = (error) => {
    toast.error(error)
    return {
        type: UPDATE_PROJECT_FAIL,
        payload: error
    }
}

export const deleteProject = (id) => ({
    type: DELETE_PROJECT,
    payload: id
})

export const deleteProjectSuccess = () => {
    toast.info(notification.projectDeleted)
    return {
        type: DELETE_PROJECT_SUCCESS,
    }
}

export const deleteProjectFail = (error) => {
    toast.error(error)
    return {
        type: DELETE_PROJECT_FAIL,
        payload: error
    }
}


export const applyRequest = (projectId, userId, role) => {
    toast.success(notification.applyRequestSent)
    return {
        type: APPLY_REQUEST,
        payload: {
            projectId,
            userId,
            forRole: role
        }
    }
}

export const approveRequest = (projectId, request) => ({
    type: APPROVE_REQUEST,
    payload: {
        projectId,
        requestId: request.requestId,
        forRole: request.forRole,
        userId: request._id
    }
})

export const declineRequest = (id, request) => ({
    type: DECLINE_REQUEST,
    payload: {
        projectId: id,
        requestId: request.requestId
    }
})

export const requestSuccess = () => ({
    type: REQUEST_SUCCESS,
})

export const requestFail = (error) => ({
    type: REQUEST_FAIL,
    payload: error
})