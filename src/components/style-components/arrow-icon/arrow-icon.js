import React from 'react'
import './arrow-icon.css'

const ArrowIcon = ({ size }) => {
    const resize = size ? `arrow-icon arrow-icon_${size}` : `arrow-icon`;

    return (
        <div className={resize}>
            <svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 23.5L23.5 2M23.5 2H2M23.5 2V23.5" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </div>
    )
}

export default ArrowIcon