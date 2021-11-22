import React from 'react'
import './follow-list.css'

import { PropTypes } from 'prop-types';

import searchIcon from '../../img/search.svg'
import SearchUsers from '../search';
import IconButton from './../style-components/icon-button/icon-button';

const FollowList = ({ currentUser, users }) => {

    return (
        <div className='container'>
            <div className='card card_search'>
                <div className="card__header">
                    <div className="header__title">follow.list</div>
                </div>
                <div className="card__content card__content-search">
                    <p className="search__title">Search</p>
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
            <SearchUsers currentUser={currentUser} users={users} />
        </div>
    )
}

FollowList.propTypes = {
    currentUser: PropTypes.object.isRequired,
    users: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default FollowList
