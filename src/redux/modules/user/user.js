import {
    SET_USER,
    EDIT_FIRSTNAME,
    EDIT_LASTNAME,
    EDIT_CITY,
    EDIT_COUNTRY,
    EDIT_BIO,
    EDIT_ROLES,
    EDIT_SKILLS,
    EDIT_SOCIALS_VK,
    EDIT_SOCIALS_FACEBOOK,
    EDIT_SOCIALS_LINKEDIN,
    EDIT_SOCIALS_GITHUB,
    ADD_PROJECT_ID,
} from '../../action-types'
import defaultProfilePicture from '../../../img/users.svg'

const initialState = {
    userId: null,
    token: null,
    isLogedIn: false,
    profilePicture: defaultProfilePicture,
    roles: [],
    friends: [],
    skills: [],
    projects: [],
    socials: {},
    login: () => { },
    logout: () => { }
}

const userReduser = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_USER:
            if (payload.token && payload.userId) {
                state.isLogedIn = true
            } else {
                state.isLogedIn = false
            }
            return Object.assign(state, payload)
        case EDIT_FIRSTNAME:
            return { ...state, firstName: payload }
        case EDIT_LASTNAME:
            return { ...state, lastName: payload }
        case EDIT_CITY:
            return { ...state, city: payload }
        case EDIT_COUNTRY:
            return { ...state, country: payload }
        case EDIT_BIO:
            return { ...state, bio: payload }
        case EDIT_ROLES:
            return { ...state, roles: payload }
        case EDIT_SKILLS:
            return { ...state, skills: payload }
        case EDIT_SOCIALS_VK:
            return { ...state, socials: { ...state.socials, vk: payload } }
        case EDIT_SOCIALS_FACEBOOK:
            return { ...state, socials: { ...state.socials, facebook: payload } }
        case EDIT_SOCIALS_LINKEDIN:
            return { ...state, socials: { ...state.socials, linkedin: payload } }
        case EDIT_SOCIALS_GITHUB:
            return { ...state, socials: { ...state.socials, github: payload } }
        case ADD_PROJECT_ID:
            return { ...state, projects: [...state.projects, payload] }
        default:
            return state
    }
}

export default userReduser