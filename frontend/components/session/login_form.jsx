import React from "react";

//requires access to user's input email

class LoginForm extends React.Component {
    render() {
        const {email} = this.props;
        return() {
            <div>
                <h1>Welcome back</h1>
                <h3>Please enter your password to log in.</h3>
                <input type="text" value={} readonly />
 
            </div>
        }
    }
}

export default LoginForm;