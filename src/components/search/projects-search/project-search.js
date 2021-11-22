import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import './project-search.css'

import searchIcon from '../../../img/search.svg'
import ProjectCard from './../../project/project-card';
import IconButton from './../../style-components/icon-button/icon-button';


const ProjectSearch = () => {
    const { projects } = useSelector(({ projects }) => ({ projects: projects.list }))
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
                    <div className="search">
                        <input className="search__input" type="text" placeholder="Type here" onChange={e => { setSearchTerm(e.target.value) }} />
                        <IconButton
                            className={'searchButton'}
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

export default ProjectSearch