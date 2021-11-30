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

// eslint-disable-next-line no-unused-vars
const JSONuser = {
    "_id": "616e71fbe25229d0d93bfd37",
    "isLogedIn": false,
    "profilePicture": "/static/media/users.86cb98ab.svg",
    "roles": [
        "Frontend"
    ],
    "follow": {
        "followers": [
            "1fake616e71fb12311233bfd37"
        ],
        "following": [
            "3fake616e71fb12311233bfd37",
            "4fake616e71fb12311233bfd37"
        ]
    },
    "skills": [
        "CSS",
        "HTML",
        "JS",
        "React",
        "redux",
        "Flutter",
        "Dart",
        "С#"
    ],
    "projects": [
        "6194c178b1599f90649a205b",
        "6194c2dcb1599f90649a205f",
    ],
    "socials": {
        "vk": "https://vk.com/ben9page",
        "facebook": "https://facebook.com/helloworld",
        "linkedin": "https://facebook.com/helloworld",
        "github": "https://facebook.com/helloworld"
    },
    "firstName": "Roman",
    "lastName": "Bianko",
    "city": "Minsk",
    "country": "Belarus",
    "bio": "Just like pretty much everything else on the internet, your Instagram bio is all about making that impactful first impression. Most people only take a few seconds to scan bio and photos before deciding whether or not they should follow you. If your Instagram bio is enticing, they might decide to engage with your content or follow your account. If it isn’t, you might lose their interest… forever."
}

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

    // bio: "Just like pretty much everything else on the internet, your Instagram bio is all about making that impactful first impression. Most people only take a few seconds to scan bio and photos before deciding whether or not they should follow you. If your Instagram bio is enticing, they might decide to engage with your content or follow your account. If it isn’t, you might lose their interest… forever."
}

const userReduser = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_USER:
            let loginState
            if (payload.token && payload._id) {
                loginState = true
            } else {
                loginState = false
            }
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