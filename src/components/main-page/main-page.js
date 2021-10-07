import React from 'react'
import './main-page.css'
import arrow from '../../img/arrow-link.svg'

const MainPage = () => {
    return (
        <div className="container">
            <div className="main-page">
                <h1 className="main-page__title">We<span className="highlight-letter">L</span>come!</h1>
                <p className="main-page__text">Cod<span className="highlight-letter">e</span> with friends</p>
                <p className="main-page__text">Boos<span className="highlight-letter">t</span> your skill<span className="highlight-letter">s</span></p>
                <p className="main-page__text">Fin<span className="highlight-letter">D</span> your zen</p>
                <p className="main-page__text">G<span className="highlight-letter">e</span>t mo<span className="highlight-letter">v</span>ing</p>
                <p className="main-page__text">Share <span className="highlight-letter">:)</span></p>
                <button className="btn_get-started btn">Get Started <img src={arrow} alt="arrow-navigaton"></img></button>
            </div>
        </div>
    )
}

export default MainPage