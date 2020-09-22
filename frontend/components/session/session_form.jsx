import React from 'react';
import SignupForm from './signup_form'
import LoginForm from './login_form'
//this will be my entry sign-in, https://www.eventbrite.com/signin/

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        //let verified = '';
        this.state = { email: '' , verified: null};
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.props.checkForUser(this.state.email, this)
        // this is designed to setState of {verified} to true or false string
    }

    handleChange(e) {
        this.setState({ email: e.target.value});  
    }

    demoLogin(e) {
        ///
    }

    render() {
        if (this.state.verified === 'true') {
            return (
                <LoginForm email={this.state.email} />
            )
        } else if (this.state.verified === 'false') {
            return (
                <SignupForm email={this.state.email} />
            )
        } else {
            return (
                <div className='session'>
                    <h1 className='form-header'>Sign up or log in</h1>
                    <form className='session-form'>
                        <br></br> 
                        <label>Email address
                            <input 
                                type="text" 
                                value={this.state.email}
                                onChange={this.handleChange}/>
                        </label>
                        <button onClick={this.handleClick}>Get Started</button>
                        or
                        <button onClick={this.demoLogin}>Demo Login</button>
                    </form>
                </div>
            )
        }
    }
}

export default SessionForm;
