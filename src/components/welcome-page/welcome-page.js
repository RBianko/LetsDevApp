import React from 'react'
import Login from '../forms/login'
import ArrowIcon from '../style-components/arrow-icon'
import './welcome-page.css'

const WelcomePage = () => {
    return (
        <>
            <div className="container container_welcome-page">
                <div className="welcome-page">
                    <Login />
                    <h1 className="welcome-page__title">We<span className="highlight-letter">L</span>come!</h1>
                    <p className="welcome-page__text">Cod<span className="highlight-letter">e</span> with friends</p>
                    <p className="welcome-page__text">Boos<span className="highlight-letter">t</span> your skill<span className="highlight-letter">'s</span></p>
                    <p className="welcome-page__text">Fin<span className="highlight-letter">D</span> your zen</p>
                    <p className="welcome-page__text">G<span className="highlight-letter">e</span>t mo<span className="highlight-letter">v</span>ing</p>
                    <p className="welcome-page__text">Share<span className="highlight-letter">.</span></p>
                    <label className="btn_get-started btn" htmlFor="modal-toggle_login">Get Started <ArrowIcon /></label>
                </div>
            </div>
        </>
    )
}

export default WelcomePage