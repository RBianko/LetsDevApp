import React from 'react'

const OtherSkill = ({ skill }) => {
    return (
        <figure key={skill} className="skill_wrapper">
            <span>{skill}</span>
        </figure>
    )
}

export default OtherSkill
