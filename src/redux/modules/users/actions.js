import {
    ADD_USER
} from '../../action-types'

export const addUser = (user) => ({
    type: ADD_USER,
    payload: user
})
