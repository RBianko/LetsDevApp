import React, { useState } from 'react'
import { connect } from 'react-redux';

import './project-search.css'
import searchIcon from '../../../img/search.svg'
import ProjectCard from './../../project/project-card';

const ProjectSearch = ({ projects }) => {

    const [searchTerm, setSearchTerm] = useState('')

    const projectsList = projects.filter(value => {
        if (searchTerm === '') {
            return value
        } else if (value.title.toLowerCase().includes(searchTerm.toLowerCase())) {
            return value
        } else {
            return value
        }

    }).map((project) =>
        <ProjectCard key={project.id} project={project} />
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
            {projectsList}
        </div>
    )
}

export default connect(
    (({ projects }) => ({ projects: projects.list }))
)(ProjectSearch)
