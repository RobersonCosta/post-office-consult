import express from 'express'
import cors from 'cors'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

const app = express();
app.use(cors())

import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'

import App from '@web/shared/App'
import reducers from '@web/config/reducers'

const store = applyMiddleware(thunk, multi, promise)(createStore)(reducers)

app.use(express.static('public'));

app.get('*', (req, res, next) => {
    const markup = renderToString(
        <Provider store={store}>
            <StaticRouter location={req.url}>
                <App />
            </StaticRouter>
        </Provider>
    )
    res.send(`
    <!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Post Office Consult</title>    

    <link href="/app.js" rel="preload" as="script">
    <link href="/app.css" rel="preload" as="style">

    <link href="/app.css" rel="stylesheet">
    <script src="/app.js" defer></script>
</head>

<body>
    <div id="app">${markup}</div>    
</body>
</html>
`
    )
})

const port = process.env.PORT || 8081;
app.listen(port, () => {
    console.log('O servidor FRONTEND - Post Office Consult está rodando na porta ' + port + ".");
});