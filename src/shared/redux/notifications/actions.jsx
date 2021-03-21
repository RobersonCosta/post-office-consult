export function pushNotification(type, title, text) {
    return dispatch => {
        dispatch({
            type: "PUSH_NOTIFICATION",
            payload: {
                type: type,
                title: title,
                text: text
            }
        })
    }   
}



export function popNotification() {
    return dispatch => {
        dispatch({
            type: "POP_NOTIFICATION"
        })
    }
}