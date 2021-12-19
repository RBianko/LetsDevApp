import React, { useState } from 'react'
import { useSelector } from 'react-redux';

import locale from '../../../../locale/en'

import ProfileCard from './../../../profile/profile-card'
import Button from './../../../style-components/button'

const Request = ({ request, onApprove, onDecline }) => {
    const { placeholder, button } = locale.translation
    const users = useSelector(state => state.users.list)
    const { _id, forRole } = request
    const user = users.find(user => user._id === _id)

    const [processed, setProcessed] = useState([false])

    const onApproveClick = () => {
        onApprove(request)
        setProcessed([true, '\u2714', placeholder.approved])
    }

    const onDeclineClick = () => {
        onDecline(request)
        setProcessed([true, '\u2718', placeholder.declined])
    }

    const buttons = processed[0] ? null :
        <>
            <Button subClass="settings_btn" onClick={() => onApproveClick()} text={button.approve} />
            <Button subClass="settings_btn" onClick={() => onDeclineClick()} text={button.decline} />
        </>

    return (
        <div className="request__item">
            <ProfileCard user={user} />
            <div className="request__info" >
                <div className="info__title" >
                    <h3>{placeholder.appliedFor}</h3>
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
