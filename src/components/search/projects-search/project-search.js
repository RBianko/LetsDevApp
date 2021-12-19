import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getAllProjects } from './../../../redux/modules/projects/actions'

import ProjectCard from './../../project/project-card'
import IconButton from './../../style-components/icon-button'
import { LoaderComponent } from './../../style-components/loader/loader'
import SearchInput from './../../style-components/input/search-input';

import locale from '../../../locale/en'

import searchIcon from '../../../img/search.svg'
import './project-search.css'


const ProjectSearch = () => {
    const { projects, loadingProjects } = useSelector(({ projects }) => ({ projects: projects.list, loadingProjects: projects.loadingProjects }))
    const dispatch = useDispatch()
    const { placeholder, header, text } = locale.translation

    const [inputTerm, setInputTerm] = useState('')

    useEffect(() => {
        dispatch(getAllProjects());
    }, [dispatch]);


    let projectsFilter = projects

    if (inputTerm !== '') {
        // eslint-disable-next-line array-callback-return
        projectsFilter = projects.filter(project => {
            if (project.title.toLowerCase().includes(inputTerm.toLowerCase()))
                return project
        })
    } // TODO: make helper func

    let projectsList = projectsFilter.map((project) =>
        <ProjectCard key={project._id} project={project} />
    )

    const projectsListContent = projectsList?.length > 0 ? projectsList : <h3>No results found.</h3>
    const searchOptions = [placeholder.title, placeholder.needRoles, placeholder.skills, placeholder.status]

    return (
        <div className='container'>
            <div className='card card_search'>
                <div className="card__header">
                    <div className="header__title">{header.searchEngine}</div>
                </div>
                <div className="card__content card__content-search">
                    <p className="search__title">{text.projectSearch}</p>
                    <div className="search">
                        <SearchInput onInputChange={setInputTerm} onSelectChange={() => { }} options={searchOptions} />
                        <IconButton
                            className={'search__button'}
                            classNameIcon={'search-icon'}
                            alt={'Search'}
                            src={searchIcon}
                        />
                    </div>
                </div>
            </div>

            {loadingProjects ? <LoaderComponent /> : projectsListContent}
        </div>
    )
}

export default ProjectSearch