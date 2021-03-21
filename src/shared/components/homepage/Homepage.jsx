import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Spin, Select, Input, Button } from 'antd';
import {
    clearPostOfficeStatus
} from '@web/redux/postOffice/actions';
import { pushNotification, popNotification } from '@web/redux/notifications/actions';
import notify from '@web/components/common/Notification';
import {
    Container,
} from './Homepage.styles';

const Homepage = () => {
    const dispatch = useDispatch();

    const {
        notificationsQueue
    } = useSelector(state => state.Notifications)

    const {
        postOfficeError,
        postOfficeSuccess
    } = useSelector(state => state.PostOffice);

    const showNotification = useCallback((notification) => {
        notify(
            notification.type,
            notification.title,
            notification.text
        );
        dispatch(popNotification());
    });

    useEffect(() => {
        if (notificationsQueue.length > 0)
            showNotification(notificationsQueue[0]);
        if (postOfficeError.status === true) handleError();
        if (postOfficeSuccess.status === true) handleSuccess();
    }, [dispatch, postOfficeError, postOfficeSuccess, notificationsQueue,])


    const handleError = useCallback(() => {
        dispatch(
            pushNotification(
                'error',
                postOfficeError.message,
                ''
            )
        );
        dispatch(
            clearPostOfficeStatus()
        );
    })

    const handleSuccess = useCallback(() => {
        dispatch(
            pushNotification(
                'success',
                postOfficeSuccess.message,
                ''
            )
        );
        dispatch(
            clearPostOfficeStatus()
        );
    })


    return (
        <>
            <Container>
                <Spin size="large" />
            </Container>
        </>
    );
}



export default Homepage;