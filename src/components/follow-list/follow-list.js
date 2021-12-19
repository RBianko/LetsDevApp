import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { getUser, getUsers } from './../../redux/modules/users/actions';

import SearchUsers from '../search';
import IconButton from './../style-components/icon-button/icon-button';
import SearchInput from './../style-components/input/search-input';
import { LoaderComponent } from './../style-components/loader/loader';

import locale from '../../locale/en';

import searchIcon from '../../img/search.svg'
import './follow-list.css'

const FollowList = () => {
    const dispatch = useDispatch()
    const location = useLocation()
    const { header, placeholder } = locale.translation

    const { list: users, loadingUsers } = useSelector(state => state.users)
    const { _id, loadingUser } = useSelector(state => state.user)
    const currentUser = useSelector(state => state.users.user)
    const { follow } = currentUser

    useEffect(() => dispatch(getUser(_id)), [_id, dispatch])
    useEffect(() => {
        if (!loadingUser) {
            if (location.pathname === '/followers')
                dispatch(getUsers(follow.followers))

            if (location.pathname === '/following')
                dispatch(getUsers(follow.following))
        }
    }, [dispatch, follow.followers, follow.following, loadingUser, location.pathname]);

    const content = loadingUsers || loadingUser
        ? <LoaderComponent />
        : <SearchUsers currentUser={currentUser} users={users} />

    const searchOptions = [placeholder.name, placeholder.roles, placeholder.skills]

    return (
        <div className='container'>
            <div className='card card_search'>
                <div className="card__header">
                    <div className="header__title">{header.followList}</div>
                </div>
                <div className="card__content card__content-search">
                    <p className="search__title">Search</p>
                    <div className="search">
                        <SearchInput onInputChange={() => { }} onSelectChange={() => { }} options={searchOptions} />
                        <IconButton
                            className={'search__button'}
                            classNameIcon={'search-icon'}
                            alt={'Search'}
                            src={searchIcon}
                        />
                    </div>
                </div>
            </div>
            {content}
        </div>
    )
}

export default FollowList