import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/homepage/home'
import ABCLesson from './pages/ABCLesson/ABCLesson';
import Reward from './pages/RewardPage/rewards';
import Autism from './pages/Disabilities/Autism/autism';
import ADHD from './pages/Disabilities/ADHD/adhd';
import ABCGame2 from './pages/games/ABCGame2/ABCGame2';
import Forum from './pages/forum/forum';
import SignUp from './pages/SignUp/signUp';
import Login from './pages/Login/login';
import Lesson from './pages/practicepage/practice'

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
        },
        {
            path: '/signUp',
            component: SignUp
        },
        {
            path: '/login',
            component: Login
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
