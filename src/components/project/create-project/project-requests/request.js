import React, { useState } from 'react'
import { useSelector } from 'react-redux';

import ProfileCard from './../../../profile/profile-card'
import Button from './../../../style-components/button'

const Request = ({ request, onApprove, onDecline }) => {
    const users = useSelector(state => state.users.list)
    const { _id, forRole } = request
    const user = users.find(user => user._id === _id)

    const [processed, setProcessed] = useState([false])

    const onApproveClick = () => {
        onApprove(request)
        setProcessed([true, '\u2714', 'Approved'])
    }

    const onDeclineClick = () => {
        onDecline(request)
        setProcessed([true, '\u2718', 'Declined'])
    }

    const buttons = processed[0] ? null :
        <>
            <Button subClass="settings_btn" onClick={() => onApproveClick()} text={'Approve'} />
            <Button subClass="settings_btn" onClick={() => onDeclineClick()} text={'Decline'} />
        </>

    return (
        <div className="request__item">
            <ProfileCard user={user} />
            <div className="request__info" >
                <div className="info__title" >
                    <h3>Applied for:</h3>
                    <span className="profile__info_role-small">{forRole}</span>
                </div>
                <div className="info__buttons" >
                    <span className="processed-request">{processed[1]} {processed[2]}</span>
                    {buttons}
                </div>
            </div>
        </div>
    )
}

export default Request
