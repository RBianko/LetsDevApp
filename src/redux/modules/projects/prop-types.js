import { PropTypes } from 'prop-types';

export const ProjectsPropTypes = PropTypes.shape({
    _id: PropTypes.string.isRequired,
    creator: PropTypes.string,
    title: PropTypes.string,
    picture: PropTypes.string,
    status: PropTypes.string,
    description: PropTypes.string,
    skills: PropTypes.arrayOf(PropTypes.string),
    devs: PropTypes.arrayOf(PropTypes.shape({
        _id: PropTypes.string.isRequired,
        firstName: PropTypes.string,
        role: PropTypes.string,
        profilePicture: PropTypes.string
    })),
    needList: PropTypes.arrayOf(PropTypes.string),
})