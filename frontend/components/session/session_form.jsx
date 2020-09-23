import React from 'react';
import SignupFormContainer from './signup_form_container'
import LoginFormContainer from './login_form_container'
//this will be my entry sign-in, https://www.eventbrite.com/signin/

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        //let verified = '';
        this.state = { email: '' , verified: null};
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.demoLogin = this.demoLogin.bind(this);
        this.isValidEmail = this.isValidEmail.bind(this);
    }

    handleClick(e) {
        if (this.isValidEmail(this.state.email) === null) {
            e.preventDefault();
            this.props.checkForUser(this.state.email, this)
        }
        // this is designed to setState of {verified} to true or false string
    }

    handleChange(e) {
        this.setState({ email: e.target.value});  
    }

    demoLogin() {
        this.props.login({ email: 'demo_user@gmail.com', password: 'demologin'});
    }

    isValidEmail(email) {
        if (email.length < 2) return null;
        let arr = email.split('@');
        if (arr.length < 2) {
            return ['Please enter a valid email address'];
        };
        if (arr[1].split('.').length < 2) {
            return ['Please enter a valid email address'];
        } else {
            return null;
        };
    }

    render() {
        if (this.state.verified === 'true') {
            return (
                <LoginFormContainer email={this.state.email} />
            )
        } else if (this.state.verified === 'false') {
            return (
                <SignupFormContainer email={this.state.email} changeForm={()=>this.setState({verified: null})}/>
            )
        } else {
            return (
                <div>
                <img className='logo' src={window.eventechURL} />
                <div className='session'>
                    <img className='e' src={window.eURL} />
                    <h1 className='form-header'>Sign up or log in</h1>
                    <form className='session-form'>
                        <br></br> 
                        <div id="floatLabel" className={ this.isValidEmail(this.state.email) ? 'error-label' : 'float-label' } >
                            <input id="floatEmail" 
                                type="email" required
                                value={this.state.email}
                                onChange={this.handleChange} />
                            <label htmlFor="floatEmail">Email address</label>
                        </div>
                        <div className="errors">{this.isValidEmail(this.state.email)}</div>
                        <button onClick={this.handleClick}>Get Started</button>
                        <p>or</p>
                        <button className='demo' onClick={this.demoLogin}>Continue as Demo User</button>
                    </form>
                </div>
                </div>
            )
        }
    }
}

export default SessionForm;



// <div className='session'>
//     <h1 className='form-header'>Sign up or log in</h1>
//     <form className='session-form'>
//         <br></br>
//         <label>Email address
//                             <input
//                 type="text"
//                 value={this.state.email}
//                 onChange={this.handleChange} />
//         </label>
//         <button onClick={this.handleClick}>Get Started</button>
//                         or
//                         <button onClick={this.demoLogin}>Demo Login</button>
//     </form>
// </div>