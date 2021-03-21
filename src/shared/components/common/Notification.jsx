import React from 'react';
import { notification } from 'antd';
import {
    FaTimes,
    FaCheckCircle,
    FaTimesCircle,
    FaInfoCircle,
    FaExclamationTriangle
} from 'react-icons/fa';



const Notification = (type, title, text) => {
    return notification[type]({
        rtl: true,
        placement: 'topRight',
        message: title,
        duration: 3,
        top: 100,
        description: text,
        closeIcon: <FaTimes />,
        icon: 
            type === "success" ? (
                <FaCheckCircle style={{color: "#27ae60"}} />
            ) :
            type === "warning" ? (
                <FaExclamationTriangle style={{color: "#f9ca24"}} />
            ) : 
            type === "info" ? (
                <FaInfoCircle style={{color: "#0984e3"}} />
            ) : (
                <FaTimesCircle style={{color: "#c0392b"}} />
            )
    })
}



export default Notification;