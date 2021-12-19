import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { getUser, getAllUsers } from './../../../redux/modules/users/actions'

import SearchUsers from '../search-users'
import SearchInput from './../../style-components/input/search-input'
import IconButton from './../../style-components/icon-button/icon-button'
import { LoaderComponent } from './../../style-components/loader/loader'

import locale from '../../../locale/en'

import searchIcon from '../../../img/search.svg'
import './devs-search.css'


const DevsSearch = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)
    const { header, text, placeholder } = locale.translation

    useEffect(() => {
        dispatch(getUser(user._id))
        dispatch(getAllUsers([]))
    }, [dispatch, user._id])

    const currentUser = useSelector(state => state.users.user)
    const { users, loadingUsers } = useSelector(({ users }) => ({ users: users.list, loadingUsers: users.loadingUsers }))

    const usersList = users.filter(user => user._id !== currentUser._id)
    const searchOptions = [placeholder.name, placeholder.roles, placeholder.skills]

    return (
        <div className='container'>
            <div className='card card_search'>
                <div className="card__header">
                    <div className="header__title">{header.searchEngine}</div>
                </div>
                <div className="card__content card__content-search">
                    <p className="search__title">{text.devsSearch}</p>
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
            {
                loadingUsers
                    ? <LoaderComponent />
                    : <SearchUsers currentUser={currentUser} users={usersList} />
            }
        </div>
    )
}

export default DevsSearch