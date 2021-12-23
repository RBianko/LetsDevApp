import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getProjects } from './../../../redux/modules/projects/actions'
import { getUser } from './../../../redux/modules/users/actions'

import { LoaderComponent } from './../../style-components/loader/loader'
import IconButton from './../../style-components/icon-button'
import ProjectCard from '../project-card'
import SearchInput from './../../style-components/input/search-input';

import locale from '../../../locale/en'

import searchIcon from '../../../img/search.svg'
import './my-projects.css'


const MyProjects = () => {
    const dispatch = useDispatch()
    const currentUser = useSelector(state => state.user)
    const { user, loadingUser } = useSelector(state => state.users)
    const { list: projects, loadingProjects } = useSelector((state) => state.projects);
    const { placeholder, text, header } = locale.translation

    useEffect(() => dispatch(getUser(currentUser._id)), [dispatch, currentUser._id])
    useEffect(() => {
        if (!loadingUser) {
            dispatch(getProjects(user.projects))
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    let projectsList = []
    if (!loadingProjects && projects.length > 0) {
        projectsList = projects.map(project => {
            return <ProjectCard key={project._id} project={project} />
        })
    }

    const projectsListContent = loadingProjects || loadingUser
        ? <LoaderComponent />
        : (projectsList.length > 0 ? projectsList : <h2>{text.youHaveNoProjects}</h2>)

    const searchOptions = [placeholder.title, placeholder.needRoles, placeholder.skills, placeholder.status]

    return (
        <div className="container">
            <div className='card card_search'>
                <div className="card__header">
                    <div className="header__title">{header.searchEngine}</div>
                </div>
                <div className="card__content card__content-search">
                    <p className="search__title">{text.projectSearch}</p>
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
            {projectsListContent}
        </div>
    )
}

export default MyProjects