import React from "react";

//requires access to user's input email

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { signup: { email: '', fname: '', lname: '', password: '' }, error: null };
        this.handleClick = this.handleClick.bind(this);
        // this.confirmEmail = this.confirmEmail.bind(this);
    }

    handleClick(e) {
        this.props.signup(this.state.signup);
    }

    // confirmEmail(e) {
    //     this.setState({signup: { email: e.target.value }});
    //     if (this.state.signup.email !== this.props.email) {
    //         this.state.error = [`Email address doesn't match. Please try again`]
    //     };
    // }

    update(field){
        // if (field === 'password') {
        //     return (e) => {
        //         let input = e.target.value
        //         this.setState({ signup: { [field]: input } })
        //         if (input.length < 8) {
        //             this.props.errors = ['Password must be at least 8 characters.']
        //         }
        //     }
        // } else {
            return (e) => (
                this.setState({signup: {[field]: e.target.value} })
            )
        // }
    }

    render() {
        // let errorsArray = this.props.errors;
        // if (this.props.errors) { //check if there are any errors
        //     errorsArray = this.props.errors.map(error => <p> {error} </p>)
        // };

        return (
            <div className='session'>
                <h1 className='form-header'>Welcome</h1>
                <h3>Create an account.</h3>
                <form className='session-form'>
                    <label>Email address
                            <input
                            type="text"
                            value={this.props.email}
                            readOnly />
                    </label>
                    <label>Confirm email
                            <input
                            type="text"
                            value={this.state.signup.email}
                            // onChange={this.confirmEmail} 
                            onChange={this.update('email')} />
                    </label>
                    {/* <p>{this.state.error}</p> */}
                    <label>First Name
                            <input
                            type="text"
                            value={this.state.signup.fname}
                            onChange={this.update('fname')} />
                    </label>
                    <label>Last Name
                            <input
                            type="text"
                            value={this.state.signup.lname}
                            onChange={this.update('lname')} />
                    </label>
                    <label>Password
                            <input
                            type="password"
                            value={this.state.signup.password}
                            onChange={this.update('password')} />
                    </label>
                    <button onClick={this.handleClick}>Sign Up</button>
                </form>
            </div>
        )
    }
}

export default SignupForm;