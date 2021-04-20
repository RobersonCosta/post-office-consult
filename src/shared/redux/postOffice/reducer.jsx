const INITIAL_STATE = {
    postOfficeSuccess: {
        status: false,
        message: ""
    },
    postOfficeError: {
        status: false,
        message: ""
    },
    postOfficeAddress : {},
    postOfficePrecoPrazo : []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'REPORT_SUCCESS':
            return {
                ...state,
                postOfficeError: {
                    status: false,
                    message: ""
                },
                postOfficeSuccess: {
                    status: true,
                    message: action.payload.message
                }
            }

        case 'REPORT_ERROR':
            return {
                ...state,
                postOfficeSuccess: {
                    status: false,
                    message: ""
                },
                postOfficeError: {
                    status: true,
                    message: action.payload.message
                }
            }

        case 'CLEAR_ERROR_STATUS':
            return {
                ...state,
                postOfficeSuccess: {
                    status: false,
                    message: ""
                },
                postOfficeError: {
                    status: false,
                    message: ""
                }
            }
        case 'GET_CURRENT_ZIP_CODE':
            return {
                ...state,
                postOfficeAddress : action.payload
            }

        case 'FETCH_PRECO_PRAZO':
            return {
                ...state,
                postOfficePrecoPrazo : action.payload
            }

        default:
            return state;
    }
}
