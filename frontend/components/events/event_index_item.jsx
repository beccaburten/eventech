import React from 'react';
import { Link } from 'react-router-dom'
import { formatDate, formatTime } from '../../util/format_util'
import {withRouter} from 'react-router-dom';

class EventItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: null }
        this.handleLike = this.handleLike.bind(this);
        this.handleUnlike = this.handleUnlike.bind(this);
    }

    handleLike(e) {
        e.preventDefault();
        if (this.props.currentUserId) {
            this.setState({ liked: true });
            const { event } = this.props;
            this.props.createLike(event.id);
        } else {
            this.props.history.push('/signin')
        }
    }

    handleUnlike(e) {
        e.preventDefault();
        this.setState({ liked: false });
        const { event, currentUserId } = this.props;
        this.props.destroyLike({user_id: currentUserId, event_id: event.id})
    }


    render() {
        const{event, likedEvents} = this.props;
        if (typeof event === null) return null
        
        return (
            <Link to={`/events/${this.props.eventId}`} className="grid-item">
                <img className="promo" src={event.photoUrl} alt={event.title} />

                {
                    this.state.liked || likedEvents.includes(event.id) 
                    ?
                    <i className="fas fa-heart" onClick={this.handleUnlike}></i>
                    :
                    <i className="far fa-heart" onClick={this.handleLike}></i>
                }
                
                <div className="ev-idx-text">
                    <h2 id="event-date">{formatDate(event.date)} {formatTime(event.start_time)}</h2>
                    <h1 id="event-title">{event.title}</h1>
                </div>
            </Link>
        )
    }
}

export const EventIndexItem = withRouter(EventItem);