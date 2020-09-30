import React from "react";
import { Route, Switch } from 'react-router-dom';
import { AuthRoute } from "../util/auth_route_util"
import { ProtectedRoute } from "../util/protected_route_util"
import NavContainer from './nav/nav_container'
import EventsIndexContainer from './events/events_index_container';
import EventShowContainer from './events/event_show_container';
import RegistrationsIndexContainer from './registrations_index/registrations_index_container';
import RegistrationShowContainer from './registrations_index/registration_show';
import SessionFormContainer from "./session/session_form_container";
import Footer from './footer/footer';
import RegistrationModal from './modal/registration_modal';
import CancelModal from './modal/cancel_modal';

const App = () => (
    <div>
        <RegistrationModal />
        <CancelModal />
        <NavContainer />
        <div className="content">
            <Switch>
                <Route exact path="/" component={EventsIndexContainer} />
                <AuthRoute path="/signin" component={SessionFormContainer} />
                <Route exact path='/events/:eventId' component={EventShowContainer} />
                <ProtectedRoute exact path='/u/:user_id' component={RegistrationsIndexContainer}/>
                <ProtectedRoute path='/u/:user_id/t/:event_id' component={RegistrationShowContainer} />
            </Switch>
        </div>
        <Footer />
    </div>
);

export default App;