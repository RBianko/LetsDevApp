import React, { useState } from 'react'
import { connect } from 'react-redux';

import './project-search.css'
import searchIcon from '../../../img/search.svg'
import ProjectCard from './../../project/project-card';
import { PropTypes } from 'prop-types';
import RolesForm from './../../forms/roles';
import { applyRequest } from './../../../redux/modules/projects/actions';

const ProjectSearch = ({ user, projects, skills, applyRequest }) => {

    const [searchTerm, setSearchTerm] = useState('')
    const [applyId, setApplyId] = useState("100")

    const applyProject = projects.find(project => project.id === applyId)

    const applyRoles = (roles) => {
        applyRequest(applyId, user.userId, roles)
    }

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
        <ProjectCard key={project.id} project={project} userId={user.userId} skills={skills} apply={true} setApplyId={setApplyId} />
    )

    let projectsListContent = projectsList.length > 0 ? projectsList : <h3>No results found.</h3>

    return (
        <div className='container'>
            <RolesForm setRoles={applyRoles} roles={applyProject.needList} />
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
            {projectsListContent}
        </div>
    )
}

ProjectSearch.propTypes = {
    projects: PropTypes.arrayOf(PropTypes.object).isRequired,
    skills: PropTypes.arrayOf(PropTypes.string),
}

export default connect(
    ({ user, projects, skills }) => ({ user, projects: projects.list, skills }),
    { applyRequest }
)(ProjectSearch)
