import React, { useState } from 'react'
import { connect } from 'react-redux';

import './project-search.css'
import searchIcon from '../../../img/search.svg'
import ProjectCard from './../../project/project-card';

const ProjectSearch = ({ projects, skills }) => {

    const [searchTerm, setSearchTerm] = useState('')

    let projectsList = projects
    if (searchTerm !== '') {
        projectsList = projects.filter(value => {
            if (value.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                return value
            } else {
                return null
            }
        })
    }


    let projectsListConent = projectsList.map((project) =>
        <ProjectCard key={project.id} project={project} skills={skills} />
    )

    return (
        <div className='container'>
            <div className='card card_search'>
                <div className="card__header">
                    search.engine
                </div>
                <div className="card__content card__content-search">
                    <p className="search__title">Projects Search</p>
                    <div className="search">
                        <input className="search__input" type="text" placeholder="Type here" onChange={e => { setSearchTerm(e.target.value) }} />
                        <button className="searchButton" type="submit">
                            <img className="search-icon" src={searchIcon} alt="Search" />
                        </button>
                    </div>
                </div>
            </div>
            {projectsListConent}
        </div>
    )
}

export default connect(
    (({ projects, skills }) => ({ projects: projects.list, skills }))
)(ProjectSearch)
