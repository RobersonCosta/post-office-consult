import axios from 'axios'
import globals from '@web/config/globals'


export function clearPostOfficeStatus() {
    return dispatch => {
        dispatch({
            type: "CLEAR_ERROR_STATUS"
        })
    }
}



function reportError(message) {
    return dispatch => {
        dispatch({
            type: "REPORT_ERROR",
            payload: {
                message: message
            }
        })
    }
}



function reportSuccess(message) {
    return dispatch => {
        dispatch({
            type: "REPORT_SUCCESS",
            payload: {
                message: message
            }
        })
    }
}