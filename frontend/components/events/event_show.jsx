import React from 'react';
import { formatDate, formatTime, showPageMonth, showPageDay } from '../../util/format_util'


class EventShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchEvent(this.props.eventId);
    }

    render() {
        const { event, organizer } = this.props;
        if (!organizer) return null;
        if (!event) return null;
        // debugger;

        return (
            <div className="event-show-container">
                <div className="clip-promo-blur">
                    <img className="promo-blur" src={event.photoUrl} alt={event.title} />
                </div>
                <main className="event-show">
                    <div className="es-top">
                        <img className="show-promo" src={event.photoUrl} alt={event.title} />
                        <div className="event-intro">
                            <div className="event-intro-textbox">
                                <h2>
                                    <p className="show-date">{showPageMonth(event.date)}</p>
                                    <p className="show-date">{showPageDay(event.date)}</p>
                                </h2>
                                <h1>{event.title}</h1>
                                {/* <h3>{organizer.fname} {organizer.lname}</h3> */}
                                <h3>{organizer ? `${organizer.fname} ${organizer.lname}` : null}</h3>
                            </div>
                        </div>
                    </div>
                    <div className="es-register">
                        <i className="far fa-heart"></i>
                        <button onClick={() => this.props.openModal('register')}>Register</button>
                    </div>
                    <div className="es-body">
                        <div className="es-body-L">
                            <h1>About This Event</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, magnam? Possimus dicta voluptatibus, similique sunt molestias animi ad eius, optio voluptas odit distinctio placeat id voluptate rerum laboriosam dolorem architecto. description lol need to add to database</p>
                        </div >
                        <div className="es-body-R">
                            <h1>Date And Time</h1>
                            <p>{formatDate(event.date)}</p>
                            <p>{formatTime(event.start_time)} - {formatTime(event.end_time)}</p>
                        </div>
                    </div>
                </main>
                <div className="clip"></div>
            </div>
        )
    }

}

export default EventShow;

