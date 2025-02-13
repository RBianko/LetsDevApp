import PropTypes from 'prop-types';

export const UserPropTypes = PropTypes.shape({
    _id: PropTypes.string.isRequired,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    city: PropTypes.string,
    country: PropTypes.string,
    bio: PropTypes.string,
    profilePicture: PropTypes.string,
    roles: PropTypes.arrayOf(PropTypes.string),
    follow: PropTypes.shape({
        followers: PropTypes.arrayOf(PropTypes.string),
        following: PropTypes.arrayOf(PropTypes.string),
    }),
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
})