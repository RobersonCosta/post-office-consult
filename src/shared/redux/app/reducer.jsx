import { getView } from './actions';

const INITIAL_STATE = {
    appView: __isBrowser__ ? getView(window.innerWidth) : 'desktop'
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "UPDATE_VIEW":
            return {
                ...state,
                appView: action.payload.newView
            }

        default:
            return state;
    }
}