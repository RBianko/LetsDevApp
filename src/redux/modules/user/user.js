import {
    SET_USER,
    ADD_PROJECT_ID,
    FOLLOW_TOGGLE,
    FOLLOW_TOGGLE_SUCCESS,
    FOLLOW_TOGGLE_FAIL,
    GET_CURRENT_USER,
    GET_CURRENT_USER_SUCCESS,
    GET_CURRENT_USER_FAIL,
    UPDATE_USER_INFO,
    UPDATE_USER_INFO_SUCCESS,
    UPDATE_USER_INFO_FAIL,
} from "../../action-types"

const initialState = {
    _id: null,
    loadingCurrentUser: false,
    followToggleLoading: false,
    token: null,
    isLogedIn: false,
    login: () => { },
    logout: () => { },

    firstName: null,
    lastName: null,
    city: null,
    country: null,
    bio: null,
    profilePicture: "/static/media/users.86cb98ab.svg",
    roles: [],
    follow: {
        followers: [],
        following: [],
    },
    skills: [],
    projects: [],
    socials: {},
}

const userReduser = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_USER:
            const loginState = !!(payload.token && payload._id)
            state = { ...state, isLogedIn: loginState, token: payload.token, _id: payload._id, login: payload.login, logout: payload.logout }
            break
        case GET_CURRENT_USER:
            state = { ...state, loadingCurrentUser: true }
            break
        case GET_CURRENT_USER_SUCCESS:
            state = { ...state, ...payload[0], loadingCurrentUser: false }
            break
        case GET_CURRENT_USER_FAIL:
            state = {
                ...state,
                error: {
                    message: "Error on GET_USER",
                },
                loadingCurrentUser: false,
            }
            break
        case UPDATE_USER_INFO:
            state = { ...state, loadingCurrentUser: true }
            break
        case UPDATE_USER_INFO_SUCCESS:
            state = { ...state, loadingCurrentUser: false }
            break
        case UPDATE_USER_INFO_FAIL:
            state = {
                ...state,
                error: {
                    message: "Error on UPDATE_USER_INFO",
                },
                loadingCurrentUser: false,
            }
            break
        case ADD_PROJECT_ID:
            state = { ...state, projects: [...state.projects, payload] }
            break
        case FOLLOW_TOGGLE:
            state = { ...state, followToggleLoading: true }
            break
        case FOLLOW_TOGGLE_SUCCESS:
            const isFollowed = state.follow.following.some(id => id === payload)
            if (isFollowed) {
                const userFollowingList = state.follow.following
                const userIdIndex = userFollowingList.findIndex(id => id === payload)
                userFollowingList.splice(userIdIndex, 1)
                return { ...state, follow: { ...state.follow, following: [...userFollowingList] } } //unfollow
            }
            state = { ...state, followToggleLoading: false, follow: { ...state.follow, following: [...state.follow.following, payload] } } //follow
            break
        case FOLLOW_TOGGLE_FAIL:
            state = {
                ...state,
                error: {
                    message: "Error on FOLLOW_TOGGLE",
                },
                followToggleLoading: false,
            }
            break
        default:
            state = { ...state }
    }
    return state
}

export default userReduser