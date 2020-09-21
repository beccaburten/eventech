import React from "react";
import { Route, Switch } from 'react-router-dom';
import SessionFormContainer from "./session/session_form_container"
import { AuthRoute } from "../util/auth_route_util"

const App = () => (
    <div>
        <header>
            <h1>Eventech</h1>
        </header>
        <Switch>
            <Route exact path="/" component={SplashContainer} />
            <AuthRoute exact path="/signin" component={SessionFormContainer} />
            <AuthRoute path="/signup" component={SignUpFormContainer} />
            <AuthRoute path="/login" component={LogInFormContainer} />
        </Switch>
    </div>
);

export default App;