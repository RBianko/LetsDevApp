/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { approveRequest, declineRequest } from '../../../../redux/modules/projects/actions'
import { getUsers } from './../../../../redux/modules/users/actions'

import Request from './request'
import { LoaderComponent } from './../../../style-components/loader/loader'

import './project-requests.css'


const ProjectRequests = () => {
    const dispatch = useDispatch()
    const { _id, requests } = useSelector(state => state.projects.project)
    const { loadingUsers } = useSelector(state => state.users)

    const ids = requests.map(request => request._id)
    useEffect(() => {
        dispatch(getUsers(ids))
    }, [])

    const onApprove = useCallback((request) =>
        dispatch(approveRequest(_id, request)),
        [dispatch]
    )

    const onDecline = useCallback((request) =>
        dispatch(declineRequest(_id, request)),
        [dispatch]
    )

    const requestsListMap = requests.map(request =>
        <Request key={request.requestId} request={request} onApprove={onApprove} onDecline={onDecline} />)

    const requestsContent = requestsListMap.length > 0 ? requestsListMap : <h3 className="description__title">No requests yet.</h3>


    const content = loadingUsers
        ? <LoaderComponent />
        :
        <>
            <div className="card__header">
                <div className="header__title">requests.table</div>
            </div>
            <div className="card__content">
                <div className="devs__list">
                    {requestsContent}
                </div>
            </div>
        </>

    return (
        <div className="container">
            <div className="card">
                {content}
            </div>
        </div>
    )
}

export default ProjectRequests
