import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from './components/Login';
import Usuario from './components/Usuario';
import Usuarios from './components/Usuarios';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
    <div className="container-fluid">
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Login} />

                <Route path="/usuario" exact={true} component={Usuario} />
                <Route path="/usuarios" exact={true} component={Usuarios} />
            </Switch>
        </BrowserRouter>
    </div>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
