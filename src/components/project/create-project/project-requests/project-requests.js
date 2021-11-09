/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useCallback } from 'react'
import { connect } from 'react-redux';
import { approveRequest, declineRequest } from '../../../../redux/modules/projects/actions';
import './project-requests.css'
import Request from './request';

const ProjectRequests = ({ project, approveRequest, declineRequest }) => {
    const { id, requests } = project
    const [requestsList, setRequestsList] = useState(requests)

    const onApprove = (request) => {
        approveRequest(id, request)
    }

    const onDecline = (request) => {
        declineRequest(id, request)
    }

    const requestsListMap = requestsList.map(request =>
        <Request key={request.requestId} request={request} onApprove={onApprove} onDecline={onDecline} />)

    useEffect(() => {
        setRequestsList(requests)
    }, [onDecline, onApprove, requests])

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

export default connect(
    ({ users }) => ({ users }),
    { approveRequest, declineRequest }
)(ProjectRequests)
