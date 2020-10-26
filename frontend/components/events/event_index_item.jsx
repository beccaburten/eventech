import React from 'react';
import { Link } from 'react-router-dom'
import { formatDate, formatTime } from '../../util/format_util'

class EventIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const{event} = this.props;

        if (typeof event === undefined) return null

        return (
            <Link to={`/events/${this.props.eventId}`} className="grid-item">
                <img className="promo" src={event.photoUrl} alt={event.title} />
                <i className="far fa-heart"></i>
                <div className="ev-idx-text">
                    <h2 id="event-date">{formatDate(event.date)} {formatTime(event.start_time)}</h2>
                    <h1 id="event-title">{event.title}</h1>
                </div>
            </Link>
        )
    }
}

export default EventIndexItem;