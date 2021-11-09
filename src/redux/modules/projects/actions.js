import {
    ADD_PROJECT,
    EDIT_NEED_LIST,
    EDIT_SKILLS_STACK,
    EDIT_DESCRIPTION,
    EDIT_TITLE,
    EDIT_STATUS,
    APPLY_REQUEST,
    APPROVE_REQUEST,
    DECLINE_REQUEST,
} from '../../action-types'


export const addProject = (project) => ({
    type: ADD_PROJECT,
    payload: project
})

export const editTitle = (string, id) => ({
    type: EDIT_TITLE,
    payload: string,
    id
})

export const editStatus = (string, id) => ({
    type: EDIT_STATUS,
    payload: string,
    id
})

export const editDescription = (string, id) => ({
    type: EDIT_DESCRIPTION,
    payload: string,
    id
})

export const editNeedList = (array, id) => ({
    type: EDIT_NEED_LIST,
    payload: array,
    id
})

export const editSkillsStack = (array, id) => ({
    type: EDIT_SKILLS_STACK,
    payload: array,
    id
})

export const applyRequest = (id, userId, array) => ({
    type: APPLY_REQUEST,
    payload: array,
    id,
    userId
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