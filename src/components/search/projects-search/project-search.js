import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { searchFilter } from '../helper/search-filter';
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
    const [selectorTerm, setSelectorTerm] = useState('title')

    useEffect(() => {
        dispatch(getAllProjects());
    }, [dispatch]);

    let projectsFilter = searchFilter(projects, selectorTerm, inputTerm)

    let projectsList = projectsFilter.map(project =>
        <ProjectCard key={project._id} project={project} />
    )

    const projectsListContent = projectsList?.length > 0 ? projectsList : <h3>{text.noResultsFound}</h3>
    const searchOptions = { 'title': placeholder.title, 'needList': placeholder.needList, 'skills': placeholder.skills, 'status': placeholder.status }

    return (
        <div className='container'>
            <div className='card card_search'>
                <div className="card__header">
                    <div className="header__title">{header.searchEngine}</div>
                </div>
                <div className="card__content card__content-search">
                    <p className="search__title">{text.projectSearch}</p>
                    <div className="search">
                        <SearchInput onInputChange={setInputTerm} onSelectChange={setSelectorTerm} options={searchOptions} />
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