/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './project-requests.css'

import { approveRequest, declineRequest } from '../../../../redux/modules/projects/actions';
import Request from './request';

const ProjectRequests = ({ projectId }) => {
    const dispatch = useDispatch()
    const { projects } = useSelector(({ projects }) => ({ projects: projects.list }))

    const project = projects.find(project => project.id === projectId);
    const { id, requests } = project;

    const onApprove = useCallback((request) =>
        dispatch(approveRequest(id, request)),
        [dispatch]
    )

    const onDecline = useCallback((request) =>
        dispatch(declineRequest(id, request)),
        [dispatch]
    )

    const requestsListMap = requests.map(request =>
        <Request key={request.requestId} request={request} onApprove={onApprove} onDecline={onDecline} />)

    const requestsContent = requestsListMap.length > 0 ? requestsListMap : <h3 className="description__title">No requests yet.</h3>

    return (
        <div className="profile__card card">
            <div className="card__header">
                requests.table
            </div>
            <div className="card__content">
                <div className="requests">
                    {requestsContent}
                </div>
            </div>
        </div>
    )
}

export default ProjectRequests
