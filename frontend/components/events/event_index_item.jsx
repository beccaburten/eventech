import React from 'react';
import { Link } from 'react-router-dom'

class EventIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const{event} = this.props;
        return (
            <Link to={`/events/${this.props.eventId}`} className="grid-item">
                <img className="promo" src={event.photoUrl} alt={event.title} />
                <i className="far fa-heart"></i>
                <div className="ev-idx-text">
                    <h2 id="event-date">{event.date}</h2>
                    <h1 id="event-title">{event.title}</h1>
                </div>
            </Link>
        )
    }
}

export default EventIndexItem;