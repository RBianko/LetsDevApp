import {
    SET_USER,
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
import { toast } from 'react-toastify';
import locale from '../../../locale/en'
const { notification } = locale.translation


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

export const updateUserInfoSuccess = (user) => {
    toast.success(notification.profileUpdated)
    return {
        type: UPDATE_USER_INFO_SUCCESS,
        payload: user
    }
}

export const updateUserInfoFail = (error) => {
    toast.error(error)
    return {
        type: UPDATE_USER_INFO_FAIL,
        payload: error
    }
}

export const followToggle = (ids) => ({
    type: FOLLOW_TOGGLE,
    payload: ids
})

export const followToggleSuccess = (id) => ({
    type: FOLLOW_TOGGLE_SUCCESS,
    payload: id
})

export const followToggleFail = (error) => ({
    type: FOLLOW_TOGGLE_FAIL,
    payload: error
})