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
        dispatch(getAllProjects())
    }, [dispatch])

    const [searchTerm, setSearchTerm] = useState('')
    const [searchBy, setSearchBy] = useState('title')

    let projectsFilter = projects
    let projectsList = projectsFilter.map((project) =>
        <ProjectCard key={project._id} project={project} />
    )

    const onSearchHandler = () => {
        switch (searchBy) {
            case 'title':
                break;
            case 'need':
                break;
            case 'skills':
                break;
            case 'status':
                break;
            default:
                break;
        }
    }

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
                            onChange={(e) => { setSearchBy(e.target.value) }}>
                            <option hidden>Search by...</option>
                            <option value="title">Title</option>
                            <option value="need">Need list</option>
                            <option value="skills">Skills</option>
                            <option value="status">Status</option>
                        </select>
                        <IconButton
                            className={'search__button'}
                            classNameIcon={'search-icon'}
                            alt={'Search'}
                            src={searchIcon}
                            onPress={onSearchHandler}
                        />
                    </div>
                </div>
            </div>
            {loadingProjects ? <LoaderComponent /> : projectsListContent}
        </div>
    )
}

export default ProjectSearch