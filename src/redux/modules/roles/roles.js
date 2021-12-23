import {
    GET_ROLES
} from '../../action-types'

// PROP_TYPES
// roles: PropTypes.arrayOf(PropTypes.string)

const initialState = [
    'Frontend',
    'Backend',
    'Tester',
    'Full-Stack',
    'Software',
    'UI-Designer',
    'UX-Designer',
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