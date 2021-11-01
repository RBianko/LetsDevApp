import React from 'react'
import './my-projects.css'

import ProjectCard from '../project-card'
import { connect } from 'react-redux'

const MyProjects = ({ user, list, skills }) => {

    const findProjects = list.map(project =>
        project.creator === user.userId ? project : null
    )
    const projectsList = findProjects.map(project =>
        <ProjectCard key={project.id} project={project} skills={skills} />
    )

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

export default connect(
    ({ user, projects, skills }) => ({ user, list: projects.list, skills }),
)(MyProjects)