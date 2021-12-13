import React from 'react'
import { PropTypes } from 'prop-types';


const OtherSkill = ({ skill }) => {
    return (
        <figure key={skill} className="skill_wrapper">
            <span>{skill}</span>
        </figure>
    )
}

OtherSkill.propTypes = {
    skill: PropTypes.string
}

export default OtherSkill
