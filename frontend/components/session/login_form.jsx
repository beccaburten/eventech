import React from "react";

//requires access to user's input email

class LoginForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {email: [this.props.email], password: ''};
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleClick(e) {
        this.props.login(this.state);
    }

    handleChange(e) {
        this.setState({ password: e.target.value });
    }

    render() {
        let errorsArray = this.props.errors;
        if (this.props.errors.session) {
            errorsArray = this.props.errors.session.map(error => <p> {error} </p>)
        };
        return(
            <div>
                <h1>Welcome back</h1>
                <h3>Please enter your password to log in.</h3>
                {errorsArray}
                <form className='login-form'>
                    <label>Email address
                                <input
                            type="text"
                            value={this.state.email}
                            onChange={this.handleChange}
                            readonly />
                    </label>
                    <input type="password" value={this.state.password} />
                    <button onClick={this.handleClick}>Log In</button>
                </form>
            </div>
        )
    }
}

export default LoginForm;