import React from "react";

//requires access to user's input email

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { email: '', fname: '', lname: '', password: '' };
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleClick(e) {
        this.props.signup(this.state);
    }

    handleChange(e) {
        this.setState({ password: e.target.value });
    }

    confirmEmail(e) {
        if (this.state.email !== this.props.email) {
            return this.props.errors = [`Email address doesn't match. Please try again
`]
        }
    }

    update(field){
        if (field === 'password') {
            return (e) => {
                let input = e.target.value
                this.setState({ [field]: input })
                if (input.length < 8) {
                    this.props.errors = ['Password msut be at least 8 characters.']
                }
            }
        } else {
            return (e) => (
                this.setState({[field]: e.target.value})
            )
        }
    }

    render() {
        const { email } = this.props;
        let errorsArray = this.props.errors;
        if (this.props.errors.session) {
            errorsArray = this.props.errors.session.map(error => <p> {error} </p>)
        };
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
                            readonly />
                    </label>
                    <label>Confirm email
                            <input
                            type="text"
                            value={this.state.email}
                            onChange={this.confirmEmail} />
                    </label>
                    <label>First Name
                            <input
                            type="text"
                            value={this.state.fname}
                            onChange={this.update('fname')} />
                    </label>
                    <label>Last Name
                            <input
                            type="text"
                            value={this.state.fname}
                            onChange={this.update('lname')} />
                    </label>
                    <label>Password
                            <input
                            type="password"
                            value={this.state.password}
                            onChange={this.update('password')} />
                    </label>
                    <button onClick={this.handleClick}>Log In</button>
                </form>
            </div>
        )
    }
}

export default SignupForm;