
import React from 'react';
import { Switch, Route } from 'react-router';
import App from './App';
import Car from './components/Car';
import About from './components/About';
import Home from './components/Home';
import Navigation from './components/Navigation';

const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={ Home }>
            </Route>
            <Route path="/App" component={ App }>
            </Route>
            <Route path="/components/Car/:id" component={ Car }>
            </Route>
            <Route path="/components/Navigation" component={ Navigation }>
            </Route>
            <Route path="/components/About" component={ About }>
            </Route>
        </Switch>
    )
}

export default Router;
