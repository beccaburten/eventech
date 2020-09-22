import React from "react";

//requires access to user's input email

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { signup: { email: '', fname: '', lname: '', password: '' }, error: null };
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        // this.confirmEmail = this.confirmEmail.bind(this);
    }

    handleClick(e) {
        this.props.signup(this.state.signup);
    }

    handleChange(e) {
        this.setState({ password: e.target.value });
    }

    // confirmEmail(e) {
    //     this.setState({ email: e.target.value })
    //     // if (this.state.email !== this.props.email) {
    //     //     this.props.errors = [`Email address doesn't match. Please try again`]
    //     // }
    // }


    handleClick() {
        try {
            // Do something that could throw
        } catch (error) {
            this.setState({ error });
        }
    }

    update(field){
        if (field === 'password') {
            return (e) => {
                let input = e.target.value
                this.setState({ signup: { [field]: input } })
                if (input.length < 8) {
                    this.props.errors = ['Password msut be at least 8 characters.']
                }
            }
        } else {
            return (e) => (
                this.setState({signup: {[field]: e.target.value} })
            )
        }
    }

    render() {
        // let errorsArray = this.props.errors;
        // if (this.props.errors) { //check if there are any errors
        //     errorsArray = this.props.errors.map(error => <p> {error} </p>)
        // };


        return (
            <div>
                <h1>Welcome</h1>
                <h3>Create an account.</h3>
                {errorsArray}
                <form className='signup-form'>
                    <label>Email address
                            <input
                            type="text"
                            value={this.props.email}
                            onChange={this.handleChange}
                            readOnly />
                    </label>
                    <label>Confirm email
                            <input
                            type="text"
                            value={this.state.signup.email}
                            onChange={this.confirmEmail} />
                    </label>
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