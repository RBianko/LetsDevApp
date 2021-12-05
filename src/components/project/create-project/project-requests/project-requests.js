/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './project-requests.css'

import { approveRequest, declineRequest } from '../../../../redux/modules/projects/actions';
import Request from './request';
import { useEffect } from 'react';
import { getUsers } from './../../../../redux/modules/users/actions';
import { LoaderComponent } from './../../../style-components/loader/loader';

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
                <div className="requests">
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
