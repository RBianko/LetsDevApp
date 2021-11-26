import {
    SET_USER,
    ADD_PROJECT_ID,
    FOLLOW_TOGGLE,
    FOLLOW_TOGGLE_SUCCESS,
    FOLLOW_TOGGLE_FAIL,
    UPDATE_USER_INFO,
    UPDATE_USER_INFO_SUCCESS,
    UPDATE_USER_INFO_FAIL,
    GET_CURRENT_USER,
    GET_CURRENT_USER_SUCCESS,
    GET_CURRENT_USER_FAIL
} from '../../action-types'


export const setUser = (user) => ({
    type: SET_USER,
    payload: user
})

export const getCurrentUser = (id) => ({
    type: GET_CURRENT_USER,
    payload: id
})

export const getCurrentUserSuccess = (user) => ({
    type: GET_CURRENT_USER_SUCCESS,
    payload: user
})

export const getCurrentUserFail = (error) => ({
    type: GET_CURRENT_USER_FAIL,
    payload: error
})

export const updateUserInfo = (user) => ({
    type: UPDATE_USER_INFO,
    payload: user
})

export const updateUserInfoSuccess = (user) => ({
    type: UPDATE_USER_INFO_SUCCESS,
    payload: user
})

export const updateUserInfoFail = (error) => ({
    type: UPDATE_USER_INFO_FAIL,
    payload: error
})

export const addProjectId = (id) => ({
    type: ADD_PROJECT_ID,
    payload: id
})

export const followToggle = (ids) => ({
    type: FOLLOW_TOGGLE,
    payload: ids
})

export const followToggleSuccess = () => ({
    type: FOLLOW_TOGGLE_SUCCESS
})

export const followToggleFail = (error) => ({
    type: FOLLOW_TOGGLE_FAIL,
    payload: error
})