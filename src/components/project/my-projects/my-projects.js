import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import './my-projects.css'

import ProjectCard from '../project-card'
import { useDispatch } from 'react-redux';
import { getProjects } from './../../../redux/modules/projects/actions';
import { getUser } from './../../../redux/modules/users/actions';
import { LoaderComponent } from './../../style-components/loader/loader';


const MyProjects = () => {
    const dispatch = useDispatch()
    const currentUser = useSelector(state => state.user)
    useEffect(() => dispatch(getUser(currentUser._id)), [dispatch, currentUser._id])

    const { user, loadingUser } = useSelector(state => state.users)
    useEffect(() => {
        if (!loadingUser) {
            dispatch(getProjects(user.projects))
        }
    }, [])
    const { list: projects, loadingProjects } = useSelector((state) => state.projects);

    let projectsList = []
    let projectsListContent = loadingProjects || loadingUser ? <LoaderComponent /> : null

    if (!loadingProjects && projects.length > 0) {
        projectsList = projects.map(project => {
            return <ProjectCard key={project._id} project={project} />
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