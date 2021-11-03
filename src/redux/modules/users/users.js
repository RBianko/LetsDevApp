import {
    ADD_USER
} from '../../action-types'

const initialState = {
    list: [
        {
            userId: "616e71fb12311233bfd37",
            token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2M!@#J)!@(J#ciLCJpYXQiOjE2MzU0OTA0MDQsImV4cCI6MTYzNTQ5NDAwNH0.Zio5nYye_GVR9JalvEcZGXxR3pXj8CLXBgdBa2J49VA",
            isLogedIn: true,
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
            projects: [],
            socials: { vk: "a8sd0a8shdjasd" },
        },
        {
            userId: "611928392323293bfd37",
            token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.1IJ!@)J#!_O@KE@!6MTYzNTQ5NDAwNH0.Zio5nYye_GVR9JalvEcZGXxR3pXj8CLXBgdBa2J49VA",
            isLogedIn: true,
            firstName: "Dave",
            lastName: "Sonneiko",
            city: "New York",
            country: "USA",
            profilePicture: "/static/media/users.86cb98ab.svg",
            roles: ["Backend"],
            follow: {
                followers: [],
                following: [],
            },
            skills: ["HTML", "JS"],
            projects: [],
            socials: { facebook: "a8sd0a8shdjasd" },
        }
    ]
}

const usersReduser = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_USER:
            if (!payload.token || !payload.userId) {
                return state
            }
            let newUser = Object.assign({}, payload)
            let registred = state.list.some(user => user.userId === newUser.userId)
            if (!registred) {
                return { ...state, list: [...state.list, newUser] }
            }
            let userIndex = state.list.findIndex(user => user.userId === newUser.userId)
            state.list.splice(userIndex, 1, newUser)
            return { ...state, list: [...state.list] }
        default:
            return state
    }
}

export default usersReduser