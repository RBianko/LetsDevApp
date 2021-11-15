import React from 'react'
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ProjectCard from './project-card';
import RolesForm from './../forms/roles';
import { applyRequest } from '../../redux/modules/projects/actions';


const Project = () => {
    let { state } = useLocation()
    const { projects, user } = useSelector(({ projects, user }) => ({ projects: projects.list, user }))
    const dispatch = useDispatch()

    const project = projects.find(project => project.id === state.id)
    const {
        id,
        skills,
        devs,
        needList
    } = project

    const userInList = devs.find(dev => dev.userId === user.userId)
    const apply = userInList ? false : true

    const applyRoles = (roles) => {
        dispatch(applyRequest(id, user.userId, roles))
    }

    return (
        <div className="container">
            <RolesForm roles={needList} setRoles={applyRoles} />
            <ProjectCard key={id} project={project} userId={user.userId} skills={skills} apply={apply} edit={userInList && userInList.creator} />
        </div>
    )
}

export default Project