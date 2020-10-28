import React from 'react';
import EventIndexItem from './event_index_item';

class EventsIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchEvents();
    }

    // componentWillUnmount() {
    //     this.props.clearEvents();
    // }

    render() {
        const {events, createLike, destroyLike, currentUserId, likedEvents} = this.props;
        return (
        <div className="splash">
            <div className="splash-banner">
                <img src={window.splashBanner} />
                <div className="splash-text">
                    <h3>Bring the internetwork to your personal network.</h3>
                    <h1>Free tech events online: </h1>
                    <a href="#grid-container">Browse events <i className="fas fa-arrow-right"></i></a>
                    {/* <button>Browse events <i className="fas fa-arrow-right"></i></button> */}
                </div>
            </div>
            <div className="grid-container">
                {events.map((event,i) => (
                    <EventIndexItem key={`${i}`} event={event} eventId={event.id} createLike={createLike} destroyLike={destroyLike} currentUserId={currentUserId} likedEvents={likedEvents} />
                ))
                }
            </div>
        </div>
        )
    }
}

export default EventsIndex;
