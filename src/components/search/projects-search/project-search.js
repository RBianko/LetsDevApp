import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import './project-search.css'

import searchIcon from '../../../img/search.svg'
import ProjectCard from './../../project/project-card';
import { getProjects } from './../../../redux/modules/projects/actions';


const ProjectSearch = () => {
    const { projects, loadingPosts } = useSelector(({ projects }) => ({ projects: projects.list, loadingPosts: projects.loadingProjects }))
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProjects());
    }, []);

    const [searchTerm, setSearchTerm] = useState('')

    let projectsFilter = projects
    if (searchTerm !== '') {
        projectsFilter = projects.filter(project => {
            if (project.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                return project
            } else {
                return null
            }
        })
    }

    let projectsList = projectsFilter.map((project) =>
        <ProjectCard key={project.id} project={project} />
    )

    let projectsListContent = projectsList.length > 0 ? projectsList : <h3>No results found.</h3>

    return (
        <div className='container'>
            <div className='card card_search'>
                <div className="card__header">
                    <div className="header__title">search.engine</div>
                </div>
                <div className="card__content card__content-search">
                    <p className="search__title">Projects Search</p>
                    {loadingPosts ? 'LOADING...' : null}
                    <div className="search">
                        <input className="search__input" type="text" placeholder="Type here" onChange={e => { setSearchTerm(e.target.value) }} />
                        <button className="searchButton" type="submit">
                            <img className="search-icon" src={searchIcon} alt="Search" />
                        </button>
                    </div>
                </div>
            </div>
            {projectsListContent}
        </div>
    )
}

export default ProjectSearch