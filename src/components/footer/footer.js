import React from 'react'
import locale from '../../locale/en'
import './footer.css'

const Footer = () => {
    return (
        <footer className="footer-wrapper">
            {locale.translation.text.footer}
        </footer>
    )
}

export default Footer