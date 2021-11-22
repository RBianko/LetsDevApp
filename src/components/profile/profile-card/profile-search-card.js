import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import './profile-card.css'

import { followToggle } from './../../../redux/modules/user/actions';
import { UserPropTypes } from './../../../redux/modules/user/prop-types';
import PropTypes from 'prop-types';
import defaultIcon from '../../../img/users.svg'
import Button from './../../style-components/button';
import CardHeader from './../../style-components/card-header';

const ProfileSearchCard = ({ user, followState, followToggle }) => {
    const { userId, firstName, lastName, city, country, roles, profilePicture } = user
    let rolesString = roles.join(', ')

    useEffect(() => {
    }, [followState])

    return (
        <div className="profile__card_search card">
            <CardHeader id={userId} title={'user.info'} path={'profile'} size="medium" />
            <div className="card__content profile-content_search">
                <img className="profile__icon_search" src={profilePicture || defaultIcon} alt="profile" />
                <div className="profile__info profile__info_search">
                    <span className="profile__info_name_search">{firstName} {lastName}</span>
                    <div className="profile__other-info">
                        <div className="other-info__items">
                            <p className="profile__info_sity">{city}, {country}</p>
                            <span className="profile__info_role-small">{rolesString}</span>
                        </div>
                        <Button subClass={'btn_follow'} onClick={followToggle} data={user.userId} text={followState} />
                    </div>
                </div>

            </div>
        </div>
    )
}

ProfileSearchCard.propTypes = {
    user: UserPropTypes,
    followToggle: PropTypes.func,
}

export default connect(
    null,
    { followToggle }
)(ProfileSearchCard)
