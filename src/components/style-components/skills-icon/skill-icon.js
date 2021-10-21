import React from 'react'
import './skill-icon.css'

import cssIcon from '../../../img/css3.svg'
import htmlIcon from '../../../img/html5.svg'
import jsIcon from '../../../img/js.svg'
import reactIcon from '../../../img/react.svg'

const SkillIcon = ({ skill, onSelectHandler = () => { } }) => {

    let icon = null
    let icons = {
        'CSS': () => { return cssIcon },
        'HTML': () => { return htmlIcon },
        'JS': () => { return jsIcon },
        'React': () => { return reactIcon },
    }
    if (icons[skill]) {
        icon = icons[skill]()
    }

    return (
        <button className="skill_wrapper" onClick={() => onSelectHandler(skill)}>
            <img className="skill-icon" src={icon} alt="css" />
            <span>{skill}</span>
        </button>
    )
}

export default SkillIcon