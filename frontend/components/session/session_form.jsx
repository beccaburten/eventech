import React from 'react';
import SignupFormContainer from './signup_form_container'
import LoginFormContainer from './login_form_container'
//this will be my entry sign-in, https://www.eventbrite.com/signin/

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { email: '' , verified: null};
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.demoLogin = this.demoLogin.bind(this);
        this.isValidEmail = this.isValidEmail.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        if (this.isValidEmail(this.state.email) === 'pending') {
            this.setState( {email: '     '});
        } else if (this.isValidEmail(this.state.email) === null) {
            this.props.checkForUser(this.state.email, this)
        } 
    }

    handleChange(e) {
        this.setState({ email: e.target.value});  
    }

    demoLogin(e) {
        e.preventDefault();
        // this.props.login({ email: 'demo_user@gmail.com', password: 'demologin'});
        const demo = { email: 'demo_user@gmail.com', password: 'demologin' };
        this.setState(demo, () => {
            const timer = setTimeout(() => this.props.login(demo), 700);
            return () => clearTimeout(timer);
        });
    }

    // GET TYPED FUNCTIONALITY WORKING --> undefined Typed
    // demoLogin(e) {
    //     e.preventDefault();
    //     let demoemail = { strings: ['demo_user@gmail.com'], typeSpeed: 50};
    //     let demopw = { strings: ['demologin'], typeSpeed: 50};
        
    //     new Typed('typeemail', demoemail);
        
    //     setTimeout(() => {
    //         new Typed('typepw', demopw)
    //     }, 1400);

    //     setTimeout(() => {
    //         this.props.login({ email: 'demo_user@gmail.com', password: 'demologin' })
    //     })
    // }


    isValidEmail(email) {
        if (email.length < 5) return 'pending';
        let arr = email.split('@');
        if (arr.length < 2) {
            return 'invalid';
        };
        if (arr[1].split('.').length < 2) {
            return 'invalid';
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
                <div className='session'>
                    <img className='e' src={window.eURL} />
                    <h1 className='form-header'>Sign up or log in</h1>
                    <form className='session-form'>
                        <br></br> 
                        <div id="floatLabel" className={this.isValidEmail(this.state.email) === 'invalid' ? 'error-label' : 'float-label' } >
                            <label htmlFor="floatEmail">Email address</label>
                            <input id="floatEmail" 
                                type="email" required
                                value={this.state.email}
                                onChange={this.handleChange} />
                        </div>
                        <div className="errors">{this.isValidEmail(this.state.email) === 'invalid' ? 'Please enter a valid email address' : null}</div>
                        <button onClick={this.handleClick}>Get Started</button>
                        <p id="or">or</p>
                        <button className='demo' onClick={this.demoLogin}>Continue as Demo User</button>
                    </form>
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