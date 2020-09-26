import React from 'react';

class EventIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const{event} = this.props;
        return (
            <div className="grid-item">
                <img className="promo" src={event.photoUrl} alt={event.title} />
                <div className="text">
                    <h2 id="event-date">{event.date}</h2>
                    <br></br>
                    <h1 id="event-title">{event.title}</h1>
                </div>
            </div>
        )
    }
}

export default EventIndexItem;