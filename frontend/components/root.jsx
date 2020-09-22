import React from "react";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import App from "./App";


const Root = ({ store }) => (
    // <h1> Entry Working </h1>
    <Provider store={store}>
        {/* <h1>Provider Working</h1> */}
        <HashRouter>
            {/* <h1>HashRouter working</h1> */}
            <App />
        </HashRouter>
    </Provider>
);

export default Root;