import React from "react";
import { Route, Switch } from 'react-router-dom';
import { AuthRoute } from "../util/auth_route_util"
import NavContainer from './nav/nav_container'
import EventsIndexContainer from './events/events_index_container';
import EventShowContainer from './events/event_show_container';
import SessionFormContainer from "./session/session_form_container";
import Footer from './footer/footer';
import Modal from './modal/modal';

const App = () => (
    <div>
        <Modal />
        <NavContainer />
        <div className="content">
            <Switch>
                <Route exact path="/" component={EventsIndexContainer} />
                <AuthRoute path="/signin" component={SessionFormContainer} />
                <Route exact path='/events/:eventId' component={EventShowContainer} />
            </Switch>
        </div>
        <Footer />
    </div>
);

export default App;