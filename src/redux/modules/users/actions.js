import {
    UPDATE_USERS,
    GET_USER,
    GET_USER_SUCCESS,
    GET_USER_FAIL,
    GET_USERS,
    GET_USERS_SUCCESS,
    GET_USERS_FAIL,
} from '../../action-types'


export const getUser = (id) => ({
    type: GET_USER,
    payload: id
})

export const getUserSuccess = (user) => ({
    type: GET_USER_SUCCESS,
    payload: user
})

export const getUserFail = (error) => ({
    type: GET_USER_FAIL,
    payload: error
})

export const getUsers = () => ({
    type: GET_USERS
})

export const getUsersSuccess = (users) => ({
    type: GET_USERS_SUCCESS,
    payload: users
})

export const getUsersFail = (error) => ({
    type: GET_USERS_FAIL,
    payload: error
})

export const updateUsers = (user) => ({
    type: UPDATE_USERS,
    payload: user
})
