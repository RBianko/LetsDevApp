import {
    UPDATE_USERS,
    GET_USER,
    GET_USER_SUCCESS,
    GET_USER_FAIL,
    GET_USERS,
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

// {
//     _id: "1fake616e71fb12311233bfd37",
//     token: "1fake616e71fb12311233bfd37.eyJ1c2VySWQiOiI2M!@#J)!@(J#ciLCJpYXQiOjE2MzU0OTA0MDQsImV4cCI6MTYzNTQ5NDAwNH0.Zio5nYye_GVR9JalvEcZGXxR3pXj8CLXBgdBa2J49VA",
//     isLogedIn: false,
//     firstName: "Dmitry",
//     lastName: "Dimenko",
//     city: "Minsk",
//     country: "Belarus",
//     profilePicture: "/static/media/users.86cb98ab.svg",
//     roles: ["Frontend"],
//     follow: {
//         followers: [],
//         following: [],
//     },
//     skills: ["HTML", "CSS"],
//     projects: ["6194c333b1599f90649a2061"],
//     socials: { vk: "a8sd0a8shdjasd" },
// },
// {
//     _id: "2fake616e71fb12311233bfd37",
//     token: "2fake616e71fb12311233bfd37.1IJ!@)J#!_O@KE@!6MTYzNTQ5NDAwNH0.Zio5nYye_GVR9JalvEcZGXxR3pXj8CLXBgdBa2J49VA",
//     isLogedIn: false,
//     firstName: "Dave",
//     lastName: "Sonneiko",
//     city: "New York",
//     country: "USA",
//     profilePicture: "/static/media/users.86cb98ab.svg",
//     roles: ["Backend"],
//     follow: {
//         followers: [],
//         following: ["616e71fbe25229d0d93bfd37"],
//     },
//     skills: ["HTML", "JS"],
//     projects: ["6194c333b1599f90649a2061"],
//     socials: { facebook: "a8sd0a8shdjasd" },
// },
// {
//     _id: "3fake616e71fb12311233bfd37",
//     token: "3fake616e71fb12311233bfd37.1IJ!@)J#!_O@KE@!6MTYzNTQ5NDAwNH0.Zio5nYye_GVR9JalvEcZGXxR3pXj8CLXBgdBa2J49VA",
//     isLogedIn: true,
//     firstName: "Singh",
//     lastName: "Arham",
//     city: "State",
//     country: "USA",
//     profilePicture: "/static/media/users.86cb98ab.svg",
//     roles: ["Software"],
//     follow: {
//         followers: [],
//         following: ["616e71fbe25229d0d93bfd37"],
//     },
//     skills: ["React", "JS", "some new feature"],
//     projects: [],
//     socials: { facebook: "a8sd0a8shdjasd" },
// },
// {
//     _id: "4fake616e71fb12311233bfd37",
//     token: "4fake616e71fb12311233bfd37.1IJ!@)J#!_O@KE@!6MTYzNTQ5NDAwNH0.Zio5nYye_GVR9JalvEcZGXxR3pXj8CLXBgdBa2J49VA",
//     isLogedIn: true,
//     firstName: "Lia",
//     lastName: "Wolker",
//     city: "New York",
//     country: "USA",
//     profilePicture: "/static/media/users.86cb98ab.svg",
//     roles: ["UI-Designer"],
//     follow: {
//         followers: [],
//         following: [],
//     },
//     skills: ["CSS", "JavaScript", "C++"],
//     projects: ["6194c2dcb1599f90649a205f"],
//     socials: { facebook: "a8sd0a8shdjasd" },
// },
// {
//     _id: "5fake616e71fb12311233bfd37",
//     token: "5fake616e71fb12311233bfd37.1IJ!@)J#!_O@KE@!6MTYzNTQ5NDAwNH0.Zio5nYye_GVR9JalvEcZGXxR3pXj8CLXBgdBa2J49VA",
//     isLogedIn: true,
//     firstName: "Mike",
//     lastName: "Nikolas",
//     city: "Tesla",
//     country: "Armenia",
//     profilePicture: "/static/media/users.86cb98ab.svg",
//     roles: ["Frontend", "Tester"],
//     follow: {
//         followers: [],
//         following: ["616e71fbe25229d0d93bfd37"],
//     },
//     skills: ["SQL", "NoSQL", "C#", "Java"],
//     projects: ["6194c2dcb1599f90649a205f"],
//     socials: { facebook: "a8sd0a8shdjasd" },
// },
// {
//     _id: "6fake616e71fb12311233bfd37",
//     token: "6fake616e71fb12311233bfd37.1IJ!@)J#!_O@KE@!6MTYzNTQ5NDAwNH0.Zio5nYye_GVR9JalvEcZGXxR3pXj8CLXBgdBa2J49VA",
//     isLogedIn: true,
//     firstName: "Lominson",
//     lastName: "Dendi",
//     city: "Minsk",
//     country: "Belarus",
//     profilePicture: "/static/media/users.86cb98ab.svg",
//     roles: ["Backend"],
//     follow: {
//         followers: [],
//         following: ["616e71fbe25229d0d93bfd37"],
//     },
//     skills: ["Java", "JS", "Svelte"],
//     projects: [],
//     socials: { facebook: "a8sd0a8shdjasd" },
// },


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
            let newUser = Object.assign({}, payload)
            let registred = state.list.some(user => user._id === newUser._id)
            if (!registred) {
                state = { ...state, list: [...state.list, newUser] }
            } else {
                let list = state.list.slice()
                let userIndex = list.findIndex(user => user._id === newUser._id)
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