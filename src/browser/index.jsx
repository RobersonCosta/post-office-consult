import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import 'jquery-mask-plugin/dist/jquery.mask.min';

import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'

import App from '@web/shared/App'
import reducers from '@web/config/reducers'

const store = applyMiddleware(thunk, multi, promise)(createStore)(reducers)

ReactDOM.hydrate(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
    , document.getElementById('app'))