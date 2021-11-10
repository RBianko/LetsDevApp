import React from 'react'
import { connect } from 'react-redux'
import './my-projects.css'

import ProjectCard from '../project-card'
import { UserPropTypes } from './../../../redux/modules/user/prop-types';
import { PropTypes } from 'prop-types';


const MyProjects = ({ user, projects, skills }) => {

    const findProjects = user.projects.map(id =>
        projects.find(project => project.id === id)
    )

    const projectsList = findProjects.map(project => {
        const dev = project.devs.find(dev => dev.userId === user.userId)
        return <ProjectCard key={project.id} project={project} userId={user.userId} skills={skills} edit={dev.creator} />
    })

    const noProjects = (<div>
        <h2>You have no projects yet.</h2>
    </div>)

    const projectsListContent = projectsList.length > 0 ? projectsList : noProjects

    return (
        <div className="container">
            {projectsListContent}
        </div>
    )
}

MyProjects.propTypes = {
    user: UserPropTypes,
    skills: PropTypes.arrayOf(PropTypes.string),
    projects: PropTypes.arrayOf(PropTypes.object),
}

export default connect(
    ({ user, projects, skills }) => ({ user, projects: projects.list, skills }),
)(MyProjects)