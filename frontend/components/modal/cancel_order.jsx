import React from 'react';

class CancelOrder extends React.Component {
    constructor(props) {
        super(props);
        this.handleUnregister = this.handleUnregister.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    // componentDidMount() {
    //     this.props.fetchRegistration(this.props.regId);
    // }

    handleUnregister(e) {
        e.preventDefault();
        const { event_id, user_id } = this.props;
         ;
        this.props.unregisterUser({ user_id: user_id, event_id: event_id});
        this.props.closeModal();
        this.props.history.push(`/u/${user_id}`)
    }

    handleClose(e) {
        e.preventDefault();
        this.props.closeModal();
    }

    render() {
        //  ;
        return (
            <div className="cancel-order-modal"> 
                {/* <div className="cancel-close-modal" onClick={this.handleClose}><i className="fas fa-times"></i></div> */}
                <div className="cancel-close-modal" onClick={this.handleClose}>x</div>
                <h1 id="cancel-order-header">Cancel Free Order </h1>
                <p id="check-certainty">Are you sure you want to cancel this order?</p>
                <div className="cancel-buttons">
                    <button id="cancel-order-button" onClick={this.handleUnregister}>Yes, Cancel This Order</button>
                    <button id="nevermind" onClick={this.handleClose}>No, Nevermind</button>
                </div>
            </div>
        )
    }
}

export default CancelOrder;