import React from 'react'

import Login from '../forms/login'
import ArrowIcon from '../style-components/arrow-icon'
import IconButton from './../style-components/icon-button';

import locale from '../../locale/en'

import './welcome-page.css'


const WelcomePage = () => {
    const { welcomePage, button } = locale.translation
    return (
        <>
            <div className="container container_welcome-page">
                <div className="welcome-page">
                    <Login />
                    <h1 className="welcome-page__title">{welcomePage.main}</h1>
                    <p className="welcome-page__text">{welcomePage.phrase1}</p>
                    <p className="welcome-page__text">{welcomePage.phrase2}</p>
                    <p className="welcome-page__text">{welcomePage.phrase3}</p>
                    <p className="welcome-page__text">{welcomePage.phrase4}</p>
                    <p className="welcome-page__text">{welcomePage.phrase5}</p>
                    <IconButton
                        className={'btn_get-started btn'}
                        htmlFor={'modal__toggle_login'}
                        text={button.getStarted}
                        child={<ArrowIcon />}
                    />
                </div>
            </div>
        </>
    )
}

export default WelcomePage