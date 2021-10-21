const GET_ROLES = `GET_ROLES`

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

export const getRoles = () => ({
    type: GET_ROLES
})

export default rolesReduser