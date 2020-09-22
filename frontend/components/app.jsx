import React from "react";
import { Route, Switch } from 'react-router-dom';
import { AuthRoute } from "../util/auth_route_util"
import SessionFormContainer from "./session/session_form_container"
import SignupFormContainer from "./session/signup_form_container"
import LoginFormContainer from "./session/login_form_container"

const App = () => (
    <div>
        <header>
            <h1>Eventech</h1>
        </header>
        <Switch>
            <Route exact path="/" component={SessionFormContainer} />
            <AuthRoute exact path="/signin" component={SessionFormContainer} />
            <AuthRoute path="/signin/signup" component={SignupFormContainer} />
            <AuthRoute path="/signin/login" component={LoginFormContainer} />
        </Switch>
    </div>
);

export default App;