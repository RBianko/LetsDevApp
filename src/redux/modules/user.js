import defaultProfilePicture from '../../img/users.svg'

// firstName: null,
// lastName: null,
// city: null,
// country: null,
// bio: null,

const SET_USER = `SET_USER`
const EDIT_FIRSTNAME = `EDIT_FIRSTNAME`
const EDIT_LASTNAME = `EDIT_LASTNAME`
const EDIT_CITY = `EDIT_CITY`
const EDIT_COUNTRY = `EDIT_COUNTRY`
const EDIT_BIO = `EDIT_BIO`
const EDIT_ROLES = `EDIT_ROLES`
const EDIT_SKILLS = `EDIT_SKILLS`
const ADD_PROJECT_ID = `ADD_PROJECT_ID`

const initialState = {
    userId: null,
    token: null,
    isLogedIn: false,
    profilePicture: defaultProfilePicture,
    roles: [],
    friends: [],
    skills: [],
    projects: [],
    login: () => { },
    logout: () => { }
}

// const getNewUserFromServer = {
//     isLogedIn: true,
//     userId: 1,
//     email: null,
//     password: null,
//     firstName: 'Roman',
//     lastName: 'Bianko',
//     profilePicture: ProfilePicture,
//     city: 'Minsk',
//     country: 'Belarus',
//     role: ['Frontend'],
//     skills: ['CSS', 'HTML', 'JS', 'React'],
//     bio: 'A bio is a detailed description of someone’s life, professional background, education history, achievements, and skill set. Unlike a curriculum vitae, a bio presents a person’s life by highlighting important aspects such as their unique skill set, details of their professional experience, notable projects they are involved in, and an analysis of their personality.',
//     projects: [ 
//     { 
//       title: 'Title'
//       status: 'Active'
//     } ]
// }

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
        case ADD_PROJECT_ID:
            return { ...state, projects: [...state.projects, payload] }
        default:
            return state
    }
}

export const setUser = (user) => ({
    type: SET_USER,
    payload: user
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

export const editRoles = (string) => ({
    type: EDIT_ROLES,
    payload: string
})

export const editSkills = (array) => ({
    type: EDIT_SKILLS,
    payload: array
})

export const addProjectId = (project) => ({
    type: ADD_PROJECT_ID,
    payload: project
})


export default userReduser