import React from 'react'
import './social-link.css'

import facebook from '../../../img/facebook.svg'
import github from '../../../img/github.svg'
import linkedin from '../../../img/linkedin.svg'
import vk from '../../../img/vk.svg'


const SocialLink = ({ media, link }) => {

    let icon = null
    let icons = {
        'facebook': () => { return facebook },
        'github': () => { return github },
        'linkedin': () => { return linkedin },
        'vk': () => { return vk }
    }

    if (icons[media]) {
        icon = icons[media]()
    } else {
        return
    }

    return (
        <div className="social-wrapper">
            <a className="social__link" href={link}>
                <img className="social-icon" src={icon} alt={media} />
            </a>
        </div>
    )
}

export default SocialLink
