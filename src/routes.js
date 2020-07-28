import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/homepage/home'
import ABCLesson from './pages/ABCLesson/ABCLesson';
import Reward from './pages/RewardPage/rewards';
import Autism from './pages/Disabilities/Autism/autism';
import ADHD from './pages/Disabilities/ADHD/adhd';
import ABCGame2 from './pages/games/ABCGame2/ABCGame2';
import Forum from './pages/forum/forum';
import Form from './pages/forms/forms'
import Game1 from './pages/ABCGame1/ABCGame1'

export default function Routes(props) {

    //Add new routes in this array
    const routes = [
        {
            path: '/',
            component: Home
        },
        {
            path: '/lesson',
            component: ABCLesson
        },
        {
            path: '/reward',
            component: Reward
        },
        {
<<<<<<< HEAD
            path: '/forum',
            component: Forum
        },
        {
            path: '/autism',
            component: Autism
        },
        {
            path: '/adhd',
            component: ADHD
        },
        {
            path: '/matching',
            component: ABCGame2
=======
            path: '/form',
            component: Form
        },
        {
            path: '/game1',
            component: Game1
>>>>>>> Adds Pop-up Modal and CSS touches
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
