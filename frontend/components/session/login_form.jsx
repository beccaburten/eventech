import React from "react";

//requires access to user's input email

class LoginForm extends React.Component {
    constructor(props){
        super(props);
        this.state = { email: [this.props.email], password: '' };
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleClick(e) {
        this.props.login(this.state);
        const { history } = this.props;
        history.push('/');
    }

    handleChange(e) {
        this.setState({ password: e.target.value });
    }

    render() {
        // let errorsArray = this.props.errors;
        // if (this.props.errors.session) {
        //     errorsArray = this.props.errors.session.map(error => <p> {error} </p>)
        // };
        return (
            <div>
            <img className='logo' src={window.eventechURL} />
            <div className='session'>
                <img className='user-icon' src={window.userIconURL} />
                <h1 className='form-header'>Welcome back</h1>
                <h3>Please enter your password to log in.</h3>
                {/* {errorsArray} */}
                <form className='session-form'>
                    <div id="floatLabel" className="float-label">
                        <label htmlFor="floatEmail">Email address</label>
                        <input id="floatEmail"
                            type="text"
                            value={this.props.email}
                            readOnly />
                    </div>
                    <div id="floatLabel" className="float-label">
                        <label htmlFor="floatPW">Password</label>
                        <input id="floatPW"
                            type="password"
                            value={this.state.password}
                            onChange={this.handleChange} />
                    </div>
                    <button onClick={this.handleClick}>Log In</button>
                </form>
            </div>
            </div>
        )
    }
}

export default LoginForm;