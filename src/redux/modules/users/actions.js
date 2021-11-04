import {
    UPDATE_USERS
} from '../../action-types'

export const updateUsers = (user) => ({
    type: UPDATE_USERS,
    payload: user
})
