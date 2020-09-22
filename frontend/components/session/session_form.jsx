import React from 'react';
import SignupForm from './signup_form'
import LoginForm from './login_form'
//this will be my entry sign-in, https://www.eventbrite.com/signin/

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { email: '' , verified: null};
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        if (this.props.checkForUser(this.state.email)) { 
            //this method change state to trigger re-render
            // but can I use the boolean return value to change local state of an arbitrary key 'verified' and trigger a re-render that way? 
            this.setState({verified: true});
        }
    
    }

    handleChange(e) {
        this.setState({ email: e.target.value});  
    }

    demoLogin(e) {
        ///
    }

    render() {
        if (verified === true) {
            return (
                <LoginForm email={this.state.email} />
            )
        } else if (verified === false) {
            return (
                <SignupForm email={this.state.email} />
            )
        } else {
            return (
                <div>
                    <h1>Sign up or log in</h1>
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
