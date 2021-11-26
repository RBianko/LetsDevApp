import {
    GET_PROJECTS,
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
} from '../../action-types'


export const getProjects = (ids) => ({
    type: GET_PROJECTS,
    payload: ids
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

export const addProjectSuccess = () => ({
    type: ADD_PROJECT_SUCCESS,
})

export const addProjectFail = (error) => ({
    type: ADD_PROJECT_FAIL,
    payload: error
})

export const updateProject = () => ({
    type: UPDATE_PROJECT,
})

export const updateProjectSuccess = () => ({
    type: UPDATE_PROJECT_SUCCESS,
})

export const updateProjectFail = (error) => ({
    type: UPDATE_PROJECT_FAIL,
    payload: error
})

export const applyRequest = (id, _id, array) => ({
    type: APPLY_REQUEST,
    payload: array,
    id,
    _id
})

export const approveRequest = (id, request) => ({
    type: APPROVE_REQUEST,
    payload: request,
    id
})

export const declineRequest = (id, request) => ({
    type: DECLINE_REQUEST,
    payload: request,
    id
})