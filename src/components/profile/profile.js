/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { forIn } from 'lodash'

import { followToggle } from './../../redux/modules/user/actions'
import { getProjects } from './../../redux/modules/projects/actions'
import { getUser } from './../../redux/modules/users/actions'
import getFollowState from '../../helpers/get-follow-state'
import { useSkills } from './../../hooks/skills.hook'

import ProjectCardSmall from '../project/project-card/project-card-small'
import SocialLink from './../style-components/social-link'
import Button from './../style-components/button'
import { LoaderComponent } from './../style-components/loader/loader'

import locale from '../../locale/en'

import './profile.css'


const Profile = () => {
    const { state } = useLocation()
    const dispatch = useDispatch()
    const { header, text } = locale.translation

    const [followState, setFollowState] = useState('Follow')

    const currentUser = useSelector(state => state.user)
    const { list: projectsList, loadingProjects } = useSelector((state) => state.projects);
    const { user, loadingUser } = useSelector(state => state.users)
    const {
        _id,
        firstName,
        lastName,
        city,
        country,
        bio,
        roles = [],
        projects = [],
        skills = [],
        socials = {},
        profilePicture,
    } = user

    useEffect(() => {
        const id = state?.id || currentUser._id
        dispatch(getUser(id))
    }, [dispatch, state])

    useEffect(() => {
        if (!loadingUser && projects.length > 0) {
            dispatch(getProjects(projects))
        }
    }, [loadingUser])

    useEffect(() => { setFollowState(getFollowState(currentUser, user)) }, [currentUser, user])


    const { global, other } = useSkills()
    const globalSkillsList = global(skills)
    const otherSkillsList = other(skills)

    const noSkillsString = otherSkillsList?.length === 0 && globalSkillsList?.length === 0 ? <p>{text.noSelectedSkills}</p> : null
    const otherSkillsTitle = otherSkillsList?.length > 0 ? <span className="skills-other__title">{text.otherTechnologies}</span> : null

    const socialsList = []
    forIn(socials, (value, key) => {
        socialsList.push(<SocialLink key={key} link={value} media={key} />)
    })

    let userProjectsList = []
    if (!loadingProjects && !loadingUser && projectsList.length) {
        userProjectsList = projectsList.map(project =>
            <ProjectCardSmall
                key={project._id}
                project={project}
            />)
    }

    const projectListContent = projects.length > 0 ? userProjectsList : <p>{firstName} {text.haveNoProjects}</p>

    const socialsTitle = socialsList.length > 0 ? <span className="socials__title">{text.contactMe}</span> : <span className="socials__title">No contacts</span>

    const profileLocation = `${city}, ${country}`
    const profileRoles = roles.join(', ')

    const onFollowToggle = () => {
        dispatch(followToggle({ followerId: currentUser._id, followingId: user._id }))
    }

    const currentUserProfile = currentUser._id === _id
    const followButton = currentUserProfile ? null : <Button subClass={'btn_follow'} onClick={onFollowToggle} text={followState} />

    const content = loadingUser || loadingProjects
        ? <LoaderComponent />
        : <>
            <div className="profile-content_header">
                <div className="profile__contacts">
                    <img className="profile-picture" src={profilePicture} alt="profile" />
                    <div className="profile__socials">
                        {followButton}
                        {socialsTitle}
                        <div className="socials__list">
                            {socialsList}
                        </div>
                    </div>
                </div>
                <div className="profile__info">
                    <p className="profile__info_name">{firstName} {lastName}</p>
                    <p className="profile__info_sity">{profileLocation}</p>
                    <p className="profile__info_role">{profileRoles}</p>
                    <div className="skills-list">
                        {noSkillsString}
                        <div className="skills-grid">
                            {globalSkillsList}
                        </div>
                        <div className="skills-other">
                            {otherSkillsTitle}
                            <div className="skills-grid">
                                {otherSkillsList}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="profile-content_body">
                <div className="profile__description">
                    <h3 className="description_title">{text.bio}</h3>
                    <p className="description_text">{bio}</p>
                </div>
                <div className="profile__projects">
                    <h3 className="projects__title">{text.projectsList}</h3>
                    <div className="projects__list">
                        {projectListContent}
                    </div>
                </div>
            </div>
        </>

    return (
        <div className="container">
            <div className="profile__card card">
                <div className="card__header">
                    <div className="header__title">{header.profilePage}</div>
                </div>
                <div className="card__content profile-content">
                    {content}
                </div>
            </div>
        </div>
    )
}

export default Profile