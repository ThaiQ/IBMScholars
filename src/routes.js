import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/homepage/home'
import ABCGame from './pages/ABCGame/ABCGame';

export default function Routes(props) {

    //Add new routes in this array
    const routes = [
        {
            path: '/',
            // component: Home, ABCGame
            component: ABCGame
        }
    ]

    return (
        <Router>
            <Switch>
                {routes.map((route, index) => {
                    return <Route exact key={index}
                        path={route.path} component={route.component} />
                })}
            </Switch>
        </Router>
    )
}