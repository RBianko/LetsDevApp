import {
    GET_ROLES
} from '../../action-types'

// PROP_TYPES
// roles: PropTypes.arrayOf(PropTypes.string)

const initialState = [
    'Фронтенд',
    'Бекенд',
    'Тестировщик',
    'Менеджер',
    'Инженер',
    'Художник',
]

const rolesReduser = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_ROLES:
            return { ...state }
        default:
            return state
    }
}

export default rolesReduser