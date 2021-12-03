/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './project-requests.css'

import { approveRequest, declineRequest } from '../../../../redux/modules/projects/actions';
import Request from './request';

const ProjectRequests = () => {
    const dispatch = useDispatch()
    const { _id, requests } = useSelector(state => state.projects.project)

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

    return (
        <div className="card">
            <div className="card__header">
                <div className="header__title">requests.table</div>
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
