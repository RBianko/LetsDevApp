import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getAllProjects } from './../../../redux/modules/projects/actions'

import ProjectCard from './../../project/project-card'
import IconButton from './../../style-components/icon-button'
import { LoaderComponent } from './../../style-components/loader/loader'

import searchIcon from '../../../img/search.svg'
import './project-search.css'


const ProjectSearch = () => {
    const { projects, loadingProjects } = useSelector(({ projects }) => ({ projects: projects.list, loadingProjects: projects.loadingProjects }))
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllProjects());
    }, [dispatch]);

    const [searchTerm, setSearchTerm] = useState('')

    let projectsFilter = projects

    if (searchTerm !== '') {
        // eslint-disable-next-line array-callback-return
        projectsFilter = projects.filter(project => {
            if (project.title.toLowerCase().includes(searchTerm.toLowerCase()))
                return project
        })
    } // TODO: make helper func

    let projectsList = projectsFilter.map((project) =>
        <ProjectCard key={project._id} project={project} />
    )

    let projectsListContent = projectsList?.length > 0 ? projectsList : <h3>No results found.</h3>

    return (
        <div className='container'>
            <div className='card card_search'>
                <div className="card__header">
                    <div className="header__title">search.engine</div>
                </div>
                <div className="card__content card__content-search">
                    <p className="search__title">Projects Search</p>
                    <div className="search">
                        <input className="search__input" type="text" placeholder="Type here" onChange={e => { setSearchTerm(e.target.value) }} />
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

            {loadingProjects ? <LoaderComponent /> : projectsListContent}
        </div>
    )
}

export default ProjectSearch