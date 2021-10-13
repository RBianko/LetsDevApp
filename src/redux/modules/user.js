import defaultProfilePicture from '../../img/users.svg'
import ProfilePicture from '../../img/administrator.svg'

const SET_USER = `SET_USER`
const EDIT_FIRSTNAME = `EDIT_FIRSTNAME`
const EDIT_LASTNAME = `EDIT_LASTNAME`
const EDIT_CITY = `EDIT_CITY`
const EDIT_COUNTRY = `EDIT_COUNTRY`
const EDIT_BIO = `EDIT_BIO`
const EDIT_ROLE = `EDIT_ROLE`
const EDIT_SKILLS = `EDIT_SKILLS`

const initialState = {
    userId: null,
    email: null,
    password: null,
    isLogedIn: false,
    firstName: null,
    lastName: null,
    profilePicture: defaultProfilePicture,
    city: null,
    country: null,
    bio: null,
    role: [],
    skills: [],
    projects: []
}

const getNewUserFromServer = {
    isLogedIn: true,
    userId: 1,
    email: null,
    password: null,
    firstName: 'Roman',
    lastName: 'Bianko',
    profilePicture: ProfilePicture,
    city: 'Minsk',
    country: 'Belarus',
    role: ['Frontend'],
    skills: ['CSS', 'HTML', 'JS', 'React'],
    bio: 'A bio is a detailed description of someone’s life, professional background, education history, achievements, and skill set. Unlike a curriculum vitae, a bio presents a person’s life by highlighting important aspects such as their unique skill set, details of their professional experience, notable projects they are involved in, and an analysis of their personality.',
    projects: [
        {
            projectId: 1,
            title: 'My Project',
            status: 'Done',
            description: 'Some Information'
        },
        {
            projectId: 2,
            title: 'New Project',
            status: 'Active',
            description: 'Some Information'
        },
    ]
}

const userReduser = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_USER:
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
        case EDIT_ROLE:
            return { ...state, role: payload }
        case EDIT_SKILLS:
            return { ...state, skills: payload }
        default:
            return state
    }
}

export const setUser = () => ({
    type: SET_USER,
    payload: getNewUserFromServer
})

export const editFirstName = (string) => ({
    type: EDIT_FIRSTNAME,
    payload: string
})

export const editLastName = (string) => ({
    type: EDIT_LASTNAME,
    payload: string
})

export const editCity = (string) => ({
    type: EDIT_CITY,
    payload: string
})

export const editCountry = (string) => ({
    type: EDIT_COUNTRY,
    payload: string
})

export const editBio = (string) => ({
    type: EDIT_BIO,
    payload: string
})

export const editRole = (string) => ({
    type: EDIT_ROLE,
    payload: string
})

export const editSkills = (string) => ({
    type: EDIT_SKILLS,
    payload: string.split(',')
})


export default userReduser