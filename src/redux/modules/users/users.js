import {
    UPDATE_USERS
} from '../../action-types'

const initialState = {
    list: [
        {
            userId: '616e71fbe25229d0d93bfd37',
            token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6I…yJogKr6xg',
            isLogedIn: true,
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
                '100',
                '101'
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
        },
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
            projects: ["102"],
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
            projects: ["102"],
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
            projects: ["101"],
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
            projects: ["101"],
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