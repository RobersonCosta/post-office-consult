import axios from 'axios'
import globals from '@web/config/globals'


export function clearPostOfficeStatus() {
    return dispatch => {
        dispatch({
            type: "CLEAR_ERROR_STATUS"
        })
    }
}

export function getCurrentZipCode(cep) {
    return dispatch => {
        axios.get(`${globals.API_URL}/postoffice/consultZipCode/${cep}`)
            .then((resp) => {
                console.log('###########GET CURRENT ZIP CODE################')
                console.log(resp.data.address)
                console.log('###########################')
                dispatch({ type: 'GET_CURRENT_ZIP_CODE', payload: resp.data.address })
                dispatch(reportSuccess("CEP consultado com sucesso!"));
            })
            .catch((error) => {
                dispatch({ type: 'GET_CURRENT_ZIP_CODE', payload: false })
                dispatch(reportError("Erro ao consultar CEP"));
            })
    }
}
export function calculaPrecoPrazo(values) {
    return dispatch => {
        axios.post(`${globals.API_URL}/postoffice/fetchPrecoPrazo/`, values)
            .then((resp) => {
                console.log('###########FETCH_PRECO_PRAZO################')
                console.log(resp.data.precosPrazosArr)
                console.log('###########################')
                dispatch({ type: 'FETCH_PRECO_PRAZO', payload: resp.data.precosPrazosArr })
                dispatch(reportSuccess("Preço e prazo calculado com sucesso!"));
            })
            .catch((error) => {
                console.log(error)
                dispatch({ type: 'FETCH_PRECO_PRAZO', payload: false })
                dispatch(reportError("Erro ao calcular preço e prazo de entrega!"));
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