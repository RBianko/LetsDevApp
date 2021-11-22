import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import './my-projects.css'

import ProjectCard from '../project-card'
import { useDispatch } from 'react-redux';
import { getProjects } from './../../../redux/modules/projects/actions';


const MyProjects = () => {
    let dispatch = useDispatch()
    useEffect(() => dispatch(getProjects()), [])

    const { list: projects, loadingProjects } = useSelector((state) => state.projects);
    const user = useSelector(state => state.user)
    const skills = useSelector(state => state.skills)
    console.log(projects)

    let findProjects = []
    let projectsList = []
    let projectsListContent = loadingProjects ? <span>LOADING...</span> : <h2>You have no projects yet.</h2>

    if (!loadingProjects && projects.length > 0) {
        findProjects = user.projects.map(id =>
            projects.find(poroject => poroject._id === id)
        )

        projectsList = findProjects.map(project => {
            const dev = project.devs.find(dev => dev.userId === user.userId)
            return <ProjectCard key={project.id} project={project} userId={user.userId} skills={skills} edit={dev.creator} />
        })
        projectsListContent = projectsList
    }

    return (
        <div className="container">
            {projectsListContent}
        </div>
    )
}

export default MyProjects