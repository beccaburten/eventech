import React from "react";
import { Route, Switch } from 'react-router-dom';
import { AuthRoute } from "../util/auth_route_util"
import NavContainer from './nav/nav_container'
import SessionFormContainer from "./session/session_form_container"
import Footer from './footer/footer';

const App = () => (
    <div>
        <div>
            <NavContainer />
            <Footer />
        </div>
        <Switch>
            {/* <Route exact path="/" component={NavContainer} /> */}
            <AuthRoute path="/signin" component={SessionFormContainer} />
        </Switch>
    </div>
);

export default App;