import React from 'react';
import { Link } from 'react-router-dom'
import { showPageMonth, showPageDay, formatDate, formatTime } from '../../util/format_util'

class LikesIndexItem extends React.Component {

    constructor(props) {
        super(props);
        this.handleUnlike = this.handleUnlike.bind(this);
    }

    handleUnlike(e) {
        e.preventDefault();
        const { event, currentUserId } = this.props;
        this.props.destroyLike({user_id: currentUserId, event_id: event.id})
    }

    render() {
        const { event } = this.props;
        return (
            <div className="likes-index-item-outer">
                <div className="likes-index-item-inner">
                    <div>
                        <p id="reg-month">{showPageMonth(event.date)}</p>
                        <p id="reg-day">{showPageDay(event.date)}</p>
                    </div>
                    <img className="reg-promo" src={event.photoUrl} alt={event.title} />
                    <div className="ev-idx-text">
                        <Link to={`/events/${event.id}/`} className="like-title">{event.title}</Link>
                        <p id="reg-date">{formatDate(event.date)} {formatTime(event.start_time)}</p>
                    </div>
                </div>
                <i className="fas fa-heart" id="likes-index-heart" onClick={this.handleUnlike}></i>
            </div>
        )
    }
}

export default LikesIndexItem;