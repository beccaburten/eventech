import React from 'react';

class RegistrationModal extends React.Component {
    constructor(props) {
        super(props);
    }

    handleRegistration(e) {
        e.preventDefault();

    }

    render() {
        return (
            <div className="modal-contents">
                <h1>congrats it works!</h1>
                <button onClick={this.handleRegistration}>Register</button>
            </div>
        )
    }
}

export default RegistrationModal;