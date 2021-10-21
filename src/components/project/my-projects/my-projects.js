import React from 'react'
import './my-projects.css'

import ProjectCard from '../project-card'
import { connect } from 'react-redux'

const MyProjects = ({ projects, list }) => {

    console.log(projects);
    const findProjects = list.map(project =>
        projects.find(element => element === project.id)
    )
    const projectsList = findProjects.map(project =>
        <ProjectCard key={project} project={project} />
    )

    console.log(projectsList)
    console.log(findProjects)

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
    ({ user, projects }) => ({ projects: user.projects, list: projects.list }),
)(MyProjects)