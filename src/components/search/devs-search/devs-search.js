import React from 'react'
import { connect } from 'react-redux';
import './devs-search.css'

import searchIcon from '../../../img/search.svg'
import SearchUsers from '../search-users'
import { PropTypes } from 'prop-types';
import { UserPropTypes } from './../../../redux/modules/user/prop-types';
import IconButton from './../../style-components/icon-button/icon-button';

const DevsSearch = ({ user: currentUser, users }) => {
    const usersList = users.filter(user => user.userId !== currentUser.userId)

    return (
        <div className='container'>
            <div className='card card_search'>
                <div className="card__header">
                    <div className="header__title">search.engine</div>
                </div>
                <div className="card__content card__content-search">
                    <p className="search__title">Devs Search</p>
                    <div className="search">
                        <input className="search__input" type="text" placeholder="Type here" />
                        <IconButton
                            className={'searchButton'}
                            classNameIcon={'search-icon'}
                            alt={'Search'}
                            src={searchIcon}
                        />
                    </div>
                </div>
            </div>
            <SearchUsers currentUser={currentUser} users={usersList} />
        </div>
    )
}

DevsSearch.propTypes = {
    user: UserPropTypes,
    users: PropTypes.arrayOf(PropTypes.shape({ UserPropTypes })),
    follow: PropTypes.func,
    unfollow: PropTypes.func,
}

export default connect(
    ({ user, users }) => ({ user, users: users.list })
)(DevsSearch)