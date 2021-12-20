import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { searchFilter } from '../helper/search-filter';
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

    const [inputTerm, setInputTerm] = useState('')
    const [selectorTerm, setSelectorTerm] = useState('firstName')

    useEffect(() => {
        dispatch(getUser(user._id))
        dispatch(getAllUsers([]))
    }, [dispatch, user._id])

    const currentUser = useSelector(state => state.users.user)
    const { users, loadingUsers } = useSelector(({ users }) => ({ users: users.list, loadingUsers: users.loadingUsers }))

    let usersFilter = searchFilter(users, selectorTerm, inputTerm)

    const usersList = usersFilter.filter(user => user._id !== currentUser._id)
    const searchOptions = { 'firstName': placeholder.name, 'roles': placeholder.roles, 'skills': placeholder.skills }

    return (
        <div className='container'>
            <div className='card card_search'>
                <div className="card__header">
                    <div className="header__title">{header.searchEngine}</div>
                </div>
                <div className="card__content card__content-search">
                    <p className="search__title">{text.devsSearch}</p>
                    <div className="search">
                        <SearchInput onInputChange={setInputTerm} onSelectChange={setSelectorTerm} options={searchOptions} />
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