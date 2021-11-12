import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import './profile-card.css'

import { followToggle } from './../../../redux/modules/user/actions';
import { UserPropTypes } from './../../../redux/modules/user/prop-types';
import defaultIcon from '../../../img/users.svg'
import Button from './../../style-components/button';

const ProfileSearchCard = ({ user, followState, followToggle }) => {

    const { userId, firstName, lastName, city, country, roles, profilePicture } = user
    let rolesList = roles.join(', ')

    useEffect(() => {
    }, [followState])

    return (
        <div className="profile__card_search card">
            <Link to={{
                pathname: `/profile/${userId}`,
                state: { id: userId }
            }}>
                <div className="card__header card__header_small" onClick={() => { }}>
                    user.info
                </div>
            </Link>
            <div className="card__content profile-content_search">
                <img className="profile__icon_search" src={profilePicture || defaultIcon} alt="profile" />
                <div className="profile__info profile__info_search">
                    <span className="profile__info_name_search">{firstName} {lastName}</span>
                    <p className="profile__info_sity">{city}, {country}</p>
                    <span className="profile__info_role-small">{rolesList}</span>
                </div>
                <Button subClass={'btn_follow'} onClick={followToggle} data={user.userId} text={followState} />
            </div>
        </div>
    )
}

ProfileSearchCard.propTypes = {
    user: UserPropTypes
}

export default connect(
    (() => ({})),
    { followToggle }
)(ProfileSearchCard)
