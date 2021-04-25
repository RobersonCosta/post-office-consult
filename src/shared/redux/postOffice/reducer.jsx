const INITIAL_STATE = {
    postOfficeSuccess: {
        status: false,
        message: ""
    },
    postOfficeError: {
        status: false,
        message: ""
    },
    showPostOfficeAddress: false,
    postOfficeAddress: {},
    showPostOfficePrecoPrazo: false,
    postOfficePrecoPrazo: []
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
                showPostOfficeAddress: true,
                postOfficeAddress: action.payload,
            }

        case 'HIDE_POST_OFFICE_ADDRESS':
            console.log("SÓ ME DIZ SE EU VIM PRA CA")
            return {
                ...state,
                showPostOfficeAddress: false,
                postOfficeAddress: {},
            }

        case 'FETCH_PRECO_PRAZO':
            return {
                ...state,
                showPostOfficePrecoPrazo: true,
                postOfficePrecoPrazo: action.payload
            }

        case 'HIDE_POST_PRECO_PRAZO':
            return {
                ...state,
                showPostOfficePrecoPrazo: false,
                postOfficePrecoPrazo: [],
            }

        default:
            return state;
    }
}
