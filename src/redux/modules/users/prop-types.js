import PropTypes from 'prop-types';

export const UsersPropTypes = PropTypes.arrayOf(PropTypes.shape({
    userId: PropTypes.string.isRequired,
    token: PropTypes.string.isRequired,
    isLogedIn: PropTypes.bool.isRequired,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    city: PropTypes.string,
    country: PropTypes.string,
    bio: PropTypes.string,
    profilePicture: PropTypes.string,
    roles: PropTypes.arrayOf(PropTypes.string),
    friends: PropTypes.arrayOf(PropTypes.string),
    skills: PropTypes.arrayOf(PropTypes.string),
    projects: PropTypes.arrayOf(PropTypes.string),
    socials: PropTypes.shape({
        vk: PropTypes.string,
        facebook: PropTypes.string,
        linkedin: PropTypes.string,
        github: PropTypes.string
    }),
    login: PropTypes.func,
    logout: PropTypes.func
}))