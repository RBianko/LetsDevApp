import {
    ADD_USER
} from '../../action-types'

const initialState = {
    list: []
}

const usersReduser = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_USER:
            if (!payload.token || !payload.userId) {
                return state
            }
            let newUser = Object.assign({}, payload)
            let registred = state.list.some(user => user.userId === newUser.userId)
            if (!registred) {
                return { ...state, list: [...state.list, newUser] }
            }
            let userIndex = state.list.findIndex(user => user.userId === newUser.userId)
            state.list.splice(userIndex, 1, newUser)
            return { ...state, list: [...state.list] }
        default:
            return state
    }
}

export default usersReduser