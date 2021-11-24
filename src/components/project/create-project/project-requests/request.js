import React from 'react'
import ProfileCard from './../../../profile/profile-card/index';
import Button from './../../../style-components/button/index';
import { useSelector } from 'react-redux';

const Request = ({ request, onApprove, onDecline }) => {
    const { users } = useSelector(({ users }) => ({ users: users.list }))
    const { _id, forRole } = request
    const user = users.find(user => user._id === _id)

    return (
        <div className="request__item">
            <ProfileCard user={user} />
            <div className="request__info" >
                <div className="info__title" >
                    <h3>Applied for:</h3>
                    <span className="profile__info_role-small">{forRole}</span>
                </div>
                <div className="info__buttons" >
                    <Button subClass="settings_btn" onClick={() => onApprove(request)} text={'Approve'} />
                    <Button subClass="settings_btn" onClick={() => onDecline(request)} text={'Decline'} />
                </div>
            </div>
        </div>
    )
}

export default Request
