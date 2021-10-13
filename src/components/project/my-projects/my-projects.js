import React from 'react'
import './my-projects.css'

import ProjectCard from '../project-card'
import { connect } from 'react-redux'

const MyProjects = ({ projects }) => {

    console.log(projects);
    const projectsList = projects.map(project =>
        <ProjectCard key={project.projectId} project={project} />
    )

    return (
        <div className="container">
            {projectsList}
        </div>
    )
}

export default connect(
    ({ projects }) => ({ projects: projects.list }),
    {}
)(MyProjects)