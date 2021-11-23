import {
    SET_USER,
    ADD_PROJECT_ID,
    FOLLOW_TOGGLE,
    UPDATE_USER_INFO,
} from "../../action-types"
// import defaultProfilePicture from "../../../img/users.svg"

const JSONuser = {
    "userId": "616e71fbe25229d0d93bfd37",
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
    loadingUser: false,
    userId: null,
    token: null,
    isLogedIn: false,

    // profilePicture: "/static/media/users.86cb98ab.svg",
    // roles: [],
    // follow: {
    //     followers: [],
    //     following: [],
    // },
    // skills: [],
    // projects: [],
    // socials: {},
    // login: () => { },
    // logout: () => { }

    // userId: null,
    // token: null,
    // isLogedIn: false,
    // profilePicture: "/static/media/users.86cb98ab.svg",
    // roles: [
    //     "Frontend"
    // ],
    // follow: {
    //     followers: [
    //         "1fake616e71fb12311233bfd37"
    //     ],
    //     following: [
    //         "3fake616e71fb12311233bfd37",
    //         "4fake616e71fb12311233bfd37"
    //     ]
    // },
    // skills: [
    //     "CSS",
    //     "HTML",
    //     "JS",
    //     "React",
    //     "redux",
    //     "Flutter",
    //     "Dart",
    //     "С#"
    // ],
    // projects: [
    //     "6194c178b1599f90649a205b",
    //     "6194c2dcb1599f90649a205f"
    // ],
    // socials: {
    //     vk: "https://vk.com/ben9page",
    //     facebook: "https://facebook.com/helloworld",
    //     linkedin: "https://facebook.com/helloworld",
    //     github: "https://facebook.com/helloworld"
    // },
    // firstName: "Roman",
    // lastName: "Bianko",
    // city: "Minsk",
    // country: "Belarus",
    // bio: "Just like pretty much everything else on the internet, your Instagram bio is all about making that impactful first impression. Most people only take a few seconds to scan bio and photos before deciding whether or not they should follow you. If your Instagram bio is enticing, they might decide to engage with your content or follow your account. If it isn’t, you might lose their interest… forever."
}

const userReduser = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_USER:
            let loginState
            if (payload.token && payload.userId) {
                loginState = true
            } else {
                loginState = false
            }
            state = { ...state, isLogedIn: loginState, token: payload.token, userId: payload.userId, login: payload.login, logout: payload.logout }
            break
        case UPDATE_USER_INFO:
            state = { ...state, ...payload }
            break
        case ADD_PROJECT_ID:
            state = { ...state, projects: [...state.projects, payload] }
            break
        case FOLLOW_TOGGLE:
            const isFollowed = state.follow.following.some(id => id === payload)
            if (isFollowed) {
                const userFollowingList = state.follow.following
                const userIdIndex = userFollowingList.findIndex(id => id === payload)
                userFollowingList.splice(userIdIndex, 1)
                state = { ...state, follow: { ...state.follow, following: [...userFollowingList] } } //unfollow
            } else {
                state = { ...state, follow: { ...state.follow, following: [...state.follow.following, payload] } } //follow
            }
            break
        default:
            state = { ...state }
    }
    return state
}

export default userReduser