import React from 'react';

class EventIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.props.history.push(`/events/${this.props.event.id}`);        
    }

    render() {
        const{event} = this.props;
        return (
            <div className="grid-item" onClick={this.handleClick}>
                <img className="promo" src={event.photoUrl} alt={event.title} />
                <i className="far fa-heart"></i>
                <div className="ev-idx-text">
                    <h2 id="event-date">{event.date}</h2>
                    <h1 id="event-title">{event.title}</h1>
                </div>
            </div>
        )
    }
}

export default EventIndexItem;

<button id="login-redirect" onClick={this.props.changeForm}>Log In Instead</button>