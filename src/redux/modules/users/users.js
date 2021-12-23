import {
    UPDATE_USERS,
    GET_USER,
    GET_USER_SUCCESS,
    GET_USER_FAIL,
    GET_USERS,
    GET_ALL_USERS,
    GET_USERS_SUCCESS,
    GET_USERS_FAIL,
} from '../../action-types'

const initialState = {
    loadingUser: false,
    loadingUsers: false,
    error: { message: '' },
    user: {},
    list: []
}


const usersReduser = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_USER:
            state = { ...state, loadingUser: true }
            break
        case GET_USER_SUCCESS:
            state = { ...state, user: payload[0], loadingUser: false }
            break
        case GET_USER_FAIL:
            state = {
                ...state,
                error: {
                    message: "Error on GET_USER",
                },
                loadingUser: false,
            }
            break
        case GET_USERS:
            state = { ...state, loadingUsers: true }
            break
        case GET_ALL_USERS:
            state = { ...state, loadingUsers: true }
            break
        case GET_USERS_SUCCESS:
            state = { ...state, list: payload, loadingUsers: false }
            break
        case GET_USERS_FAIL:
            state = {
                ...state,
                error: {
                    message: "Error on GET_USER",
                },
                loadingUsers: false,
            }
            break
        case UPDATE_USERS:
            if (!payload._id && !payload.token) {
                return state
            }
            const newUser = Object.assign({}, payload)
            const registred = state.list.some(user => user._id === newUser._id)
            if (!registred) {
                state = { ...state, list: [...state.list, newUser] }
            } else {
                const list = state.list.slice()
                const userIndex = list.findIndex(user => user._id === newUser._id)
                list.splice(userIndex, 1, newUser)
                state = { ...state, list: list }
            }
            break
        default:
            state = { ...state }
    }
    return state
}

export default usersReduser