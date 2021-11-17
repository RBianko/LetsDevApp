import {
    UPDATE_USERS
} from '../../action-types'

const initialState = {
    loadingUsers: false,
    error: { message: '' },
    list: [
        {
            userId: "1fake616e71fb12311233bfd37",
            token: "1fake616e71fb12311233bfd37.eyJ1c2VySWQiOiI2M!@#J)!@(J#ciLCJpYXQiOjE2MzU0OTA0MDQsImV4cCI6MTYzNTQ5NDAwNH0.Zio5nYye_GVR9JalvEcZGXxR3pXj8CLXBgdBa2J49VA",
            isLogedIn: false,
            firstName: "Dmitry",
            lastName: "Dimenko",
            city: "Minsk",
            country: "Belarus",
            profilePicture: "/static/media/users.86cb98ab.svg",
            roles: ["Frontend"],
            follow: {
                followers: [],
                following: [],
            },
            skills: ["HTML", "CSS"],
            projects: ["6194c333b1599f90649a2061"],
            socials: { vk: "a8sd0a8shdjasd" },
        },
        {
            userId: "2fake616e71fb12311233bfd37",
            token: "2fake616e71fb12311233bfd37.1IJ!@)J#!_O@KE@!6MTYzNTQ5NDAwNH0.Zio5nYye_GVR9JalvEcZGXxR3pXj8CLXBgdBa2J49VA",
            isLogedIn: false,
            firstName: "Dave",
            lastName: "Sonneiko",
            city: "New York",
            country: "USA",
            profilePicture: "/static/media/users.86cb98ab.svg",
            roles: ["Backend"],
            follow: {
                followers: [],
                following: ["616e71fbe25229d0d93bfd37"],
            },
            skills: ["HTML", "JS"],
            projects: ["6194c333b1599f90649a2061"],
            socials: { facebook: "a8sd0a8shdjasd" },
        },
        {
            userId: "3fake616e71fb12311233bfd37",
            token: "3fake616e71fb12311233bfd37.1IJ!@)J#!_O@KE@!6MTYzNTQ5NDAwNH0.Zio5nYye_GVR9JalvEcZGXxR3pXj8CLXBgdBa2J49VA",
            isLogedIn: true,
            firstName: "Singh",
            lastName: "Arham",
            city: "State",
            country: "USA",
            profilePicture: "/static/media/users.86cb98ab.svg",
            roles: ["Software"],
            follow: {
                followers: [],
                following: ["616e71fbe25229d0d93bfd37"],
            },
            skills: ["React", "JS", "some new feature"],
            projects: [],
            socials: { facebook: "a8sd0a8shdjasd" },
        },
        {
            userId: "4fake616e71fb12311233bfd37",
            token: "4fake616e71fb12311233bfd37.1IJ!@)J#!_O@KE@!6MTYzNTQ5NDAwNH0.Zio5nYye_GVR9JalvEcZGXxR3pXj8CLXBgdBa2J49VA",
            isLogedIn: true,
            firstName: "Lia",
            lastName: "Wolker",
            city: "New York",
            country: "USA",
            profilePicture: "/static/media/users.86cb98ab.svg",
            roles: ["UI-Designer"],
            follow: {
                followers: [],
                following: [],
            },
            skills: ["CSS", "JavaScript", "C++"],
            projects: ["6194c2dcb1599f90649a205f"],
            socials: { facebook: "a8sd0a8shdjasd" },
        },
        {
            userId: "5fake616e71fb12311233bfd37",
            token: "5fake616e71fb12311233bfd37.1IJ!@)J#!_O@KE@!6MTYzNTQ5NDAwNH0.Zio5nYye_GVR9JalvEcZGXxR3pXj8CLXBgdBa2J49VA",
            isLogedIn: true,
            firstName: "Mike",
            lastName: "Nikolas",
            city: "Tesla",
            country: "Armenia",
            profilePicture: "/static/media/users.86cb98ab.svg",
            roles: ["Frontend", "Tester"],
            follow: {
                followers: [],
                following: ["616e71fbe25229d0d93bfd37"],
            },
            skills: ["SQL", "NoSQL", "C#", "Java"],
            projects: ["6194c2dcb1599f90649a205f"],
            socials: { facebook: "a8sd0a8shdjasd" },
        },
        {
            userId: "6fake616e71fb12311233bfd37",
            token: "6fake616e71fb12311233bfd37.1IJ!@)J#!_O@KE@!6MTYzNTQ5NDAwNH0.Zio5nYye_GVR9JalvEcZGXxR3pXj8CLXBgdBa2J49VA",
            isLogedIn: true,
            firstName: "Lominson",
            lastName: "Dendi",
            city: "Minsk",
            country: "Belarus",
            profilePicture: "/static/media/users.86cb98ab.svg",
            roles: ["Backend"],
            follow: {
                followers: [],
                following: ["616e71fbe25229d0d93bfd37"],
            },
            skills: ["Java", "JS", "Svelte"],
            projects: [],
            socials: { facebook: "a8sd0a8shdjasd" },
        },
    ]
}

const usersReduser = (state = initialState, { type, payload }) => {
    switch (type) {
        case UPDATE_USERS:
            if (!payload.userId && !payload.token) {
                return state
            }
            let newUser = Object.assign({}, payload)
            let registred = state.list.some(user => user.userId === newUser.userId)
            if (!registred) {
                return { ...state, list: [...state.list, newUser] }
            }
            let list = state.list.slice()
            let userIndex = list.findIndex(user => user.userId === newUser.userId)
            list.splice(userIndex, 1, newUser)
            return { ...state, list: list }
        default:
            return state
    }
}

export default usersReduser