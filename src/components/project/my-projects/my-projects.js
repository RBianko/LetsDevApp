import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import './my-projects.css'

import ProjectCard from '../project-card'
import { useDispatch } from 'react-redux';
import { getProjects } from './../../../redux/modules/projects/actions';
import { LoaderComponent } from './../../style-components/loader/loader';


const MyProjects = () => {
    let dispatch = useDispatch()
    useEffect(() => dispatch(getProjects()), [])

    const { list: projects, loadingProjects } = useSelector((state) => state.projects);
    const user = useSelector(state => state.user)
    const skills = useSelector(state => state.skills)
    console.log(projects)

    let findProjects = []
    let projectsList = []
    let projectsListContent = loadingProjects ? <LoaderComponent /> : null

    if (!loadingProjects && projects.length > 0) {
        findProjects = user.projects.map(id =>
            projects.find(poroject => poroject._id === id)
        )

        projectsList = findProjects.map(project => {
            const dev = project.devs.find(dev => dev._id === user._id)
            return <ProjectCard key={project.id} project={project} _id={user._id} skills={skills} edit={dev.creator} />
        })
        projectsListContent = projectsList.length > 0 ? projectsList : <h2>You have no projects yet.</h2>
    }

    return (
        <div className="container">
            {projectsListContent}
        </div>
    )
}

export default MyProjects