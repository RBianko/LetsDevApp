import React from 'react'
import { Link } from 'react-router-dom'
import './card-header.css'

import ArrowIcon from './../../style-components/arrow-icon';


const CardHeader = ({ id, title, path, size = null }) => {
    const resize = size ? `card__header card__header_${size}` : `card__header`;

    return (
        <Link to={{
            pathname: `/${path}/${id}`,
            state: { id }
        }}>
            <div className={resize} title="Go to page">
                <div className="header__title">{title}</div>
                <ArrowIcon size={size} />
            </div>
        </Link>
    )
}

export default CardHeader
