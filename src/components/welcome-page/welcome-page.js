import React from 'react'
import './welcome-page.css'

import Login from '../forms/login'
import ArrowIcon from '../style-components/arrow-icon'
import IconButton from './../style-components/icon-button';

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
                    <IconButton
                        className={'btn_get-started btn'}
                        htmlFor={'modal__toggle_login'}
                        text={'Get Started'}
                        child={<ArrowIcon />}
                    />
                </div>
            </div>
        </>
    )
}

export default WelcomePage