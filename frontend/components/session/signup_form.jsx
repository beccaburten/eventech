import React from "react";

//requires access to user's input email

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { email: '', fname: '', lname: '', password: '' };
        this.handleClick = this.handleClick.bind(this);
        // this.confirmEmail = this.confirmEmail.bind(this);
    }

    handleClick(e) {
        this.props.signup(this.state);
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
    update(field){
        return (e) => (
            this.setState({[field]: e.target.value})
        )
    }

    render() {
        // let errorsArray; //= this.props.errors;
        // if (this.props.errors) { //check if there are any errors
        //     errorsArray = this.props.errors.map(error => <p> {error} </p>)
        // };

        return (
            <div className='session'>
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
                    <p>{this.confirmEmail()}</p>
                    <div className="name">
                        <div id="floatName" className="float-name">
                            <label htmlFor="floatFName">First Name</label>
                            <input id="floatFName"
                                type="text"
                                value={this.state.fname}
                                onChange={this.update('fname')} />
                        </div>
                        <div id="floatName" className="float-name">
                            <label htmlFor="floatLName">Last Name</label>
                            <input id="floatLName"
                                type="text"
                                value={this.state.lname}
                                onChange={this.update('lname')} />
                        </div>
                    </div>
                    <div id="floatLabel" className="float-label">
                        <label htmlFor="floatPW">Password</label>
                        <input id="floatPW"
                            type="password"
                            value={this.state.password}
                            onChange={this.update('password')} />
                    </div>
                    <p>{this.validPW()}</p>
                    <button onClick={this.handleClick}>Sign Up</button>
                </form>
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