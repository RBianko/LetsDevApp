import React from 'react'
import './skill-icon.css'

import cssIcon from '../../../img/css3.svg'
import htmlIcon from '../../../img/html5.svg'
import jsIcon from '../../../img/js.svg'
import reactIcon from '../../../img/react.svg'
import pythonIcon from '../../../img/python.svg'
import javaIcon from '../../../img/java.svg'
import cPlusIcon from '../../../img/c++.svg'
import cSharpIcon from '../../../img/c-sharp.svg'
import rIcon from '../../../img/r.png'
import golangIcon from '../../../img/golang.svg'
import swiftIcon from '../../../img/swift.svg'
import rubyIcon from '../../../img/ruby.svg'
import sqlIcon from '../../../img/sql.png'
import { PropTypes } from 'prop-types';

const SkillIcon = ({ skill }) => {

    let icon = null
    let icons = {
        'CSS': () => { return cssIcon },
        'HTML': () => { return htmlIcon },
        'JS': () => { return jsIcon },
        'React': () => { return reactIcon },
        'Python': () => { return pythonIcon },
        'Java': () => { return javaIcon },
        'C++': () => { return cPlusIcon },
        'С#': () => { return cSharpIcon },
        'R': () => { return rIcon },
        'Go': () => { return golangIcon },
        'Swift': () => { return swiftIcon },
        'Ruby': () => { return rubyIcon },
        'SQL': () => { return sqlIcon }
    }

    if (icons[skill]) {
        icon = icons[skill]()
    } else {
        return
    }

    return (
        <figure className="skill_wrapper">
            <img className="skill-icon" src={icon} alt={skill} />
            <span>{skill}</span>
        </figure>
    )
}

SkillIcon.propTypes = {
    skill: PropTypes.string
}

export default SkillIcon