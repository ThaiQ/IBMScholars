import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/homepage/home'
import Game from './pages/ABCGame1/ABCGame1'

export default function Routes(props) {

    //Add new routes in this array
    const routes = [
        {
            path: '/',
            component: Home
        },
        {
            path: '/game1',
            component: Game
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
