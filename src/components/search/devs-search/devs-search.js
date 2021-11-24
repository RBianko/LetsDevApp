import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import './devs-search.css'

import searchIcon from '../../../img/search.svg'
import SearchUsers from '../search-users'
import { getUser, getUsers } from './../../../redux/modules/users/actions';
import IconButton from './../../style-components/icon-button/icon-button';
import { LoaderComponent } from './../../style-components/loader/loader';

const DevsSearch = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)

    useEffect(() => {
        dispatch(getUser(user._id))
        dispatch(getUsers())
    }, [dispatch, user._id])

    const currentUser = useSelector(state => state.users.user)
    const { users, loadingUsers } = useSelector(({ users }) => ({ users: users.list, loadingUsers: users.loadingUsers }))

    const usersList = users.filter(user => user._id !== currentUser._id)

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
            {
                loadingUsers
                    ? <LoaderComponent />
                    : <SearchUsers currentUser={currentUser} users={usersList} />
            }


        </div>
    )
}

export default DevsSearch