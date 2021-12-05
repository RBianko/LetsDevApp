import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import './my-projects.css'

import searchIcon from '../../../img/search.svg'
import ProjectCard from '../project-card'
import { useDispatch } from 'react-redux';
import { getProjects } from './../../../redux/modules/projects/actions';
import { getUser } from './../../../redux/modules/users/actions';
import { LoaderComponent } from './../../style-components/loader/loader';
import IconButton from './../../style-components/icon-button/index';


const MyProjects = () => {
    const dispatch = useDispatch()
    const currentUser = useSelector(state => state.user)
    useEffect(() => dispatch(getUser(currentUser._id)), [dispatch, currentUser._id])

    const { user, loadingUser } = useSelector(state => state.users)
    useEffect(() => {
        if (!loadingUser) {
            dispatch(getProjects(user.projects))
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const { list: projects, loadingProjects } = useSelector((state) => state.projects);

    let projectsList = []
    let projectsListContent = loadingProjects || loadingUser ? <LoaderComponent /> : null

    if (!loadingProjects && projects.length > 0) {
        projectsList = projects.map(project => {
            return <ProjectCard key={project._id} project={project} />
        })
    }
    projectsListContent = projectsList.length > 0 ? projectsList : <h2>You have no projects yet.</h2>

    return (
        <div className="container">
            <div className='card card_search'>
                <div className="card__header">
                    <div className="header__title">search.engine</div>
                </div>
                <div className="card__content card__content-search">
                    <p className="search__title">Projects Search</p>
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
                            <option value="Online">Title</option>
                            <option value="Offline">Need list</option>
                            <option value="Active">Skills</option>
                            <option value="Done">Status</option>
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
            {projectsListContent}
        </div>
    )
}

export default MyProjects