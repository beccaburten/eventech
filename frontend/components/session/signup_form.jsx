import React from "react";
import {Link} from 'react-router-dom';

//requires access to user's input email

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { email: '', fname: '', lname: '', password: '' };
        this.handleClick = this.handleClick.bind(this);
        // this.confirmEmail = this.confirmEmail.bind(this);
    }

    handleClick(e) {
        let errors = this.requiredFields(); 
        if (errors.length < 1) {
            this.props.signup(this.state);
            const { history } = this.props;
            history.push('/');
        }
    }

    confirmEmail() {
        if (this.state.email.length < 2) return null;
        if (this.state.email !== this.props.email) {
            return `Email address doesn't match. Please try again`;
        } else {
            return ``;
        }
    }

    validPW() {
        if (this.state.password.length < 8) {
            return `Your password must be at least 8 characters`;
        } else {
            return null
        }
    }

    requiredFields() {
        let requiredFields = {};
        if (this.state.fname === '') { requiredFields['fname'] = ['First name is required.'] }
        if (this.state.lname === '') { requiredFields['lname'] = ['Last name is required.'] }
        if (this.state.password === '') { requiredFields['pw'] = ['Password is required.'] }
        return requiredFields;
    }
    

    update(field){
        return (e) => (
            this.setState({[field]: e.target.value})
        )
    }

    render() {
        let missingField = this.requiredFields();
        return (
            <div>
            <img className='logo' src={window.eventechURL} />
            <div className='session'>
                <img className='user-icon' src={window.userIconURL} />
                <h1 className='form-header'>Welcome</h1>
                <h3>Create an account.</h3>
                <form className='session-form'>
                    <div id="floatLabel" className="float-label">
                        <label htmlFor="floatEmail">Email address</label>
                        <input id="floatEmail"
                            type="text"
                            value={this.props.email}
                            readOnly />
                    </div>
                    <div id="floatLabel" className="float-label">
                        <label htmlFor="origEmail">Confirm email</label>
                        <input id="origEmail"
                            type="text"
                            value={this.state.email}
                            onChange={this.update('email')} />  
                    </div>
                    <p className="errors">{this.confirmEmail()}</p>
                    <div className="name">
                        <div>
                            <div className="float-name">
                                <label htmlFor="floatFName">First Name</label>
                                    <input id="floatFName"
                                    type="text"
                                    value={this.state.fname}
                                    onChange={this.update('fname')} />
                            </div>
                            <p className="errors">{missingField['fname']}</p>
                        </div>
                        <div>
                            <div className="float-name">
                                <label htmlFor="floatLName">Last Name</label>
                                    <input id="floatLName"
                                    type="text"
                                    value={this.state.lname}
                                    onChange={this.update('lname')} />
                            </div>
                            <p className="errors">{missingField['lname']}</p>
                        </div>
                    </div>
                    <div id="floatLabel" className="float-label">
                        <label htmlFor="floatPW">Password</label>
                        <input id="floatPW"
                            type="password"
                            value={this.state.password}
                            onChange={this.update('password')} />
                    </div>
                    <p className="errors">{missingField['pw']}</p>
                    <p className="errors">{this.validPW()}</p>
                    <button onClick={this.handleClick}>Sign Up</button>
                    <Link className="login-redirect" to='/signin'>Log In Instead</Link>
                </form>
            </div>
            </div>
        )
    }
}

export default SignupForm;


// return (
//     <div className='session'>
//         <h1 className='form-header'>Welcome</h1>
//         <h3>Create an account.</h3>
//         <form className='session-form'>
//             <label>Email address
//                             <input
//                     type="text"
//                     value={this.props.email}
//                     readOnly />
//             </label>
//             <label>Confirm email
//                             <input
//                     type="text"
//                     value={this.state.signup.email}
//                     // onChange={this.confirmEmail} 
//                     onChange={this.update('email')} />
//             </label>
//             {/* <p>{this.state.error}</p> */}
//             <label>First Name
//                             <input
//                     type="text"
//                     value={this.state.signup.fname}
//                     onChange={this.update('fname')} />
//             </label>
//             <label>Last Name
//                             <input
//                     type="text"
//                     value={this.state.signup.lname}
//                     onChange={this.update('lname')} />
//             </label>
//             <label>Password
//                             <input
//                     type="password"
//                     value={this.state.signup.password}
//                     onChange={this.update('password')} />
//             </label>
//             <button onClick={this.handleClick}>Sign Up</button>
//         </form>
//     </div>
// )
//     }