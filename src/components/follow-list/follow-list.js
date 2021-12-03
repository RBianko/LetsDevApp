import React, { useEffect } from 'react'
import './follow-list.css'
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { getUser, getUsers } from './../../redux/modules/users/actions';
import searchIcon from '../../img/search.svg'
import SearchUsers from '../search';
import IconButton from './../style-components/icon-button/icon-button';
import { LoaderComponent } from './../style-components/loader/loader';

const FollowList = () => {
    const dispatch = useDispatch()
    const location = useLocation()
    const { _id, loadingUser } = useSelector(state => state.user)
    useEffect(() => dispatch(getUser(_id)), [_id, dispatch])
    const currentUser = useSelector(state => state.users.user)
    const { follow } = currentUser

    useEffect(() => {
        if (!loadingUser) {
            if (location.pathname === '/followers')
                dispatch(getUsers(follow.followers))

            if (location.pathname === '/following')
                dispatch(getUsers(follow.following))
        }
    }, [dispatch, follow.followers, follow.following, loadingUser, location.pathname]);
    const { list: users, loadingUsers } = useSelector(state => state.users)

    const content = loadingUsers || loadingUser
        ? <LoaderComponent />
        : <SearchUsers currentUser={currentUser} users={users} />

    return (
        <div className='container'>
            <div className='card card_search'>
                <div className="card__header">
                    <div className="header__title">follow.list</div>
                </div>
                <div className="card__content card__content-search">
                    <p className="search__title">Search</p>
                    <div className="search">
                        <input className="search__input" type="text" placeholder="Type here" onChange={e => { }} />
                        <select
                            className="search__select"
                            id="status"
                            type="text"
                            placeholder="Status"
                            value={''}
                            onChange={() => { }}>
                            <option hidden>Search by...</option>
                            <option value="Online">Name</option>
                            <option value="Offline">Roles</option>
                            <option value="Active">Skills</option>
                        </select>
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