import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store"
import Root from "./components/root";
// import { registerUser } from './util/reg_api_util';

document.addEventListener("DOMContentLoaded", ()=>{
    const root = document.getElementById('root');
    
    let preloadedState = undefined;
    if (window.currentUser) {
        preloadedState = {
            session: { id: window.currentUser.id },
            entities: { users: { [window.currentUser.id]: window.currentUser} }
        };
        delete window.currentUser;
    } else {
        preloadedState = {
            session: { id: null }
        };
    }

    const store = configureStore(preloadedState);
    // window.store = store;
    // window.getState = store.getState;
    // window.registerUser = registerUser;
    // window.fetchEvents = fetchEvents;

    ReactDOM.render(<Root store={store}/>, root)
})

/*
testing in the browser console:
import thunk action creator
add .store and .getState to the window
add the thunk action to the window

ie
    // window.store = store;
    // window.getState = store.getState;
    // window.fetchEvent = fetchEvent;
    // window.fetchEvents = fetchEvents;
*/