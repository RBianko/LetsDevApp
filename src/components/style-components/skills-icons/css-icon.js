import React from 'react'
import icon from '../../../img/css.png'
import './skills.css'

const CssIcon = () => {
    return (
        <div className="skill_wrapper">
            <img className="skill-icon" src={icon} alt="css" />
            <span>CSS</span>
        </div>
    )
}

export default CssIcon