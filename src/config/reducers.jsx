import { combineReducers } from 'redux'

import AppReducer from '@web/redux/app/reducer'
import PostOfficeReducer from '@web/redux/postOffice/reducer'
import NotificationsReducer from '@web/redux/notifications/reducer'

const rootReducer = combineReducers({
    App: AppReducer,
    PostOffice: PostOfficeReducer,
    Notifications: NotificationsReducer
})

export default rootReducer