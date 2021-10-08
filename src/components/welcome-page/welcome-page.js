import React from 'react'
import LoginForm from '../login-form/login-form'
import ArrowIcon from '../style-components/arrow-icon'
import Header from "./header";
import Footer from '../footer';
import './welcome-page.css'


const WeclomePage = () => {
    return (
        <>
            <Header />
            <div className="container">
                <div className="welcome-page">
                    <LoginForm />
                    <h1 className="welcome-page__title">We<span className="highlight-letter">L</span>come!</h1>
                    <p className="welcome-page__text">Cod<span className="highlight-letter">e</span> with friends</p>
                    <p className="welcome-page__text">Boos<span className="highlight-letter">t</span> your skill<span className="highlight-letter">s</span></p>
                    <p className="welcome-page__text">Fin<span className="highlight-letter">D</span> your zen</p>
                    <p className="welcome-page__text">G<span className="highlight-letter">e</span>t mo<span className="highlight-letter">v</span>ing</p>
                    <p className="welcome-page__text">Share <span className="highlight-letter">:)</span></p>
                    <label className="btn_get-started btn" for="modal-toggle">Get Started <ArrowIcon /></label>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default WeclomePage