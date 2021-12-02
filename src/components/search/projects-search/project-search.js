import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import './project-search.css'

import searchIcon from '../../../img/search.svg'
import ProjectCard from './../../project/project-card';
import IconButton from './../../style-components/icon-button/icon-button';
import { getAllProjects } from './../../../redux/modules/projects/actions';
import { LoaderComponent } from './../../style-components/loader/loader';


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
                        <div className="settings__item">
                            <label className="text-label" htmlFor="skill">By Name</label>
                            <input className="search__input" type="text" placeholder="Type here" onChange={e => { setSearchTerm(e.target.value) }} />
                        </div>
                        <IconButton
                            className={'searchButton'}
                            classNameIcon={'search-icon'}
                            alt={'Search'}
                            src={searchIcon}
                        />
                    </div>

                    <div className="settings__item">
                        <label className="text-label" htmlFor="status">Status</label>
                        <select
                            className="text-input"
                            id="status"
                            type="text"
                            placeholder="Status"
                            value={''}
                            onChange={() => { }}>
                            <option hidden>Select one...</option>
                            <option value="Online">Online</option>
                            <option value="Offline">Offline</option>
                            <option value="Active">Active</option>
                            <option value="Done">Done</option>
                            <option value="Planned">Planned</option>
                        </select>
                        <label className="text-label" htmlFor="role">Need roles</label>
                        <div className="input__item">
                            <input
                                className="text-input input_complex" disabled
                                id="role"
                                type="text"
                                placeholder="Roles"
                                value={''}
                                onChange={() => { }} />
                            <label className="btn input_btn" htmlFor="modal__toggle_roles">Edit</label>
                        </div>
                    </div>
                </div>
            </div>
            {loadingProjects ? <LoaderComponent /> : projectsListContent}
        </div>
    )
}

export default ProjectSearch