import React, { useState } from 'react'
import ProfileCard from './../../../profile/profile-card/index';
import Button from './../../../style-components/button/index';
import { useSelector } from 'react-redux';

const Request = ({ request, onApprove, onDecline }) => {
    const users = useSelector(state => state.users.list)
    const { _id, forRole } = request
    const user = users.find(user => user._id === _id)

    const [processed, setProcessed] = useState(null)

    const onApproveClick = () => {
        onApprove(request)
        setProcessed(<span className="processed-request">&#10004; Approved</span>)
    }

    const onDeclineClick = () => {
        onDecline(request)
        setProcessed(<span className="processed-request">&#10006; Declined</span>)
    }

    const buttons = processed ? null :
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
                    {processed}
                    {buttons}
                </div>
            </div>
        </div>
    )
}

export default Request
