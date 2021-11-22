import {
    SET_USER,
    ADD_PROJECT_ID,
    FOLLOW_TOGGLE,
    UPDATE_USER_INFO
} from '../../action-types'

export const setUser = (user) => ({
    type: SET_USER,
    payload: user
})

export const updateUserInfo = (user) => ({
    type: UPDATE_USER_INFO,
    payload: user
})

export const addProjectId = (id) => ({
    type: ADD_PROJECT_ID,
    payload: id
})

export const followToggle = (id) => ({
    type: FOLLOW_TOGGLE,
    payload: id
})