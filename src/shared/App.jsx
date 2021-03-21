// CSS imports

import 'antd/dist/antd.css';

import React, { useCallback } from 'react';
import routes from '@web/config/routes';
import {
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import AppWrapper, { BodyWrapper } from '@web/shared/App.styles';
import { updateView } from '@web/redux/app/actions';


const App = () => {
    const dispatch = useDispatch();

    const handleResize = useCallback(() => {
        dispatch(updateView());
    })

    if (__isBrowser__) {
        window.addEventListener('resize', handleResize);
    }

    return (
        <AppWrapper>
            <BodyWrapper>
                <Switch>
                    {routes.map(({ path, exact, component: Component }) => (
                        <Route key={path} path={path} exact={exact} component={Component} />
                    ))}
                    <Redirect from="*" to="/" />
                </Switch>
            </BodyWrapper>
        </AppWrapper>
    )
}
  


export default App;