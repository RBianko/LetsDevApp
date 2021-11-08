import React from 'react'
import { connect } from 'react-redux';
import './request.css'

import ProfileCard from './../../profile/profile-card';
import Button from './../../style-components/button';

const ProjectRequests = ({ users, project }) => {
    const { devs } = project

    return (
        <div className="profile__card card">
            <div className="card__header">
                project.requests
            </div>
            <div className="card__content">
                <div className="request">
                    <div className="request__item">
                        <ProfileCard userId={devs[0].userId} role={devs[0].role} />
                        <div className="request__info" >
                            <div className="info__title" >
                                <h3>Applied for:</h3>
                                <span className="profile__info_role-small">{devs[0].role}</span>
                            </div>
                            <div className="info__buttons" >
                                <Button subClass="settings_btn" onClick={() => { }} text={'Approve'} />
                                <Button subClass="settings_btn" onClick={() => { }} text={'Decline'} />
                            </div>
                        </div>
                    </div>
                    <div className="request__item">
                        <ProfileCard userId={devs[0].userId} role={devs[0].role} />
                        <div className="request__info" >
                            <div className="info__title" >
                                <h3>Applied for:</h3>
                                <span className="profile__info_role-small">{devs[0].role}</span>
                            </div>
                            <div className="info__buttons" >
                                <Button subClass="settings_btn" onClick={() => { }} text={'Approve'} />
                                <Button subClass="settings_btn" onClick={() => { }} text={'Decline'} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default connect(
    ({ users }) => ({ users })
)(ProjectRequests)
