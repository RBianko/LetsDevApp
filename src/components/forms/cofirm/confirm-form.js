import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import Button from '../../style-components/button'
import IconButton from './../../style-components/icon-button'
import { deleteProject } from '../../../redux/modules/projects/actions'

import locale from '../../../locale/en'

const ConfirmForm = ({ id }) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const { button, text } = locale.translation

    const onDeleteProject = () => {
        dispatch(deleteProject(id))
        history.push('/my-projects')
    }

    return (
        <>
            <input id="modal__toggle_confirm" type="checkbox" />
            <div className="modal-backdrop_confirm" htmlFor="modal__toggle_confirm" />
            <div className="modal-content_confirm">
                <h4 className="header__title_confirm">{text.deleteProject}</h4>
                <div className="modal__buttons">
                    <Button subClass="input_btn" onClick={() => onDeleteProject()} text={button.yes} />
                    <IconButton
                        className={'btn input_btn'}
                        htmlFor={'modal__toggle_confirm'}
                        text={button.no}
                    />
                </div>
            </div>
        </>
    )
}

export default ConfirmForm
