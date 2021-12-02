import React from 'react'
import './social-link.css'

import facebook from '../../../img/facebook.svg'
import github from '../../../img/github.svg'
import linkedin from '../../../img/linkedin.svg'
import vk from '../../../img/vk.svg'
import { PropTypes } from 'prop-types';


const SocialLink = ({ media, link }) => {

    let icon = null
    let icons = {
        'facebook': facebook,
        'github': github,
        'linkedin': linkedin,
        'vk': vk
    }

    if (icons[media]) {
        icon = icons[media]
    } else return

    return (
        <div className="social-wrapper">
            <a className="social__link" href={link} target="_blank" rel="noopener noreferrer">
                <img className="social-icon" src={icon} alt={media} />
            </a>
        </div>
    )
}

SocialLink.propTypes = {
    media: PropTypes.string,
    link: PropTypes.string,
}

export default SocialLink