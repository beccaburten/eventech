import React from 'react';
import { Link } from 'react-router-dom'

//this will be my entry sign-in, https://www.eventbrite.com/signin/

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.checkForUser(user);
    }

    update(field) {
        return (e) => this.setState({[field]: e.target.value});  
    }

    render() {
        const {formType} = this.props;
     
        // let errorsArray = this.props.errors;
        // if (this.props.errors.session) {
        //  errorsArray = this.props.errors.session.map(error => <p> {error} </p>)
        // };
        return (
            <form>
                <h1>Sign up or log in</h1>
                {/* <p className='error-message'>{errorsArray}</p> */}
                <br></br> 
                <label>Email address
                    <input 
                        type="text" 
                        value={this.state.email}
                        onChange={this.update('email')}/>
                </label>
                <button onClick={this.handleClick}>Get Started</button>
            </form>
        );
    }
}

//Redirect the user to the / route if they are logged in. ??? 
// isn't this protected routes????

export default SessionForm;
