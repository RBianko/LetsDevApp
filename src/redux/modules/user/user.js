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
    FOLLOW_TOGGLE,
} from '../../action-types'
// import defaultProfilePicture from '../../../img/users.svg'

const initialState = {
    //     userId: null,
    //     token: null,
    //     isLogedIn: false,
    //     profilePicture: defaultProfilePicture,
    //     roles: [],
    //     follow: {
    //         followers: ["611928392323293bfd37"],
    //         following: [],
    //     },
    //     skills: [],
    //     projects: [],
    //     socials: {},
    //     login: () => { },
    //     logout: () => { }

    userId: null,
    token: null,
    isLogedIn: false,
    profilePicture: '/static/media/users.86cb98ab.svg',
    roles: [
        'Frontend'
    ],
    follow: {
        followers: [
            '1fake616e71fb12311233bfd37'
        ],
        following: [
            '3fake616e71fb12311233bfd37',
            '4fake616e71fb12311233bfd37'
        ]
    },
    skills: [
        'CSS',
        'HTML',
        'JS',
        'React',
        'redux',
        'Flutter',
        'Dart',
        'С#'
    ],
    projects: [
        "100",
        "101",
    ],
    socials: {
        vk: 'https://vk.com/ben9page',
        facebook: 'https://facebook.com/helloworld',
        linkedin: 'https://facebook.com/helloworld',
        github: 'https://facebook.com/helloworld'
    },
    firstName: 'Roman',
    lastName: 'Bianko',
    city: 'Minsk',
    country: 'Belarus',
    bio: 'Just like pretty much everything else on the internet, your Instagram bio is all about making that impactful first impression. Most people only take a few seconds to scan bio and photos before deciding whether or not they should follow you. If your Instagram bio is enticing, they might decide to engage with your content or follow your account. If it isn’t, you might lose their interest… forever.'

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
            return { ...state, isLogedIn: loginState, token: payload.token, userId: payload.userId }
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
        case FOLLOW_TOGGLE:
            const isFollowed = state.follow.following.some(id => id === payload)
            if (isFollowed) {
                const userFollowingList = state.follow.following
                const userIdIndex = userFollowingList.findIndex(id => id === payload)
                userFollowingList.splice(userIdIndex, 1)
                return { ...state, follow: { ...state.follow, following: [...userFollowingList] } } //unfollow
            }
            return { ...state, follow: { ...state.follow, following: [...state.follow.following, payload] } } //follow
        default:
            return state
    }
}

export default userReduser