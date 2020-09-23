import React from "react";
import { Route, Switch } from 'react-router-dom';
import { AuthRoute } from "../util/auth_route_util"
import SplashContainer from './splash/splash'
import SessionFormContainer from "./session/session_form_container"

const App = () => (
    <div>
        <header>
            <h1>Eventech</h1>
        </header>
        <Switch>
            <Route exact path="/" component={SplashContainer} />
            <AuthRoute exact path="/signin" component={SessionFormContainer} />
        </Switch>
    </div>
);

export default App;