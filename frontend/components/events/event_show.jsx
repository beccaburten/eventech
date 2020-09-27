import React from 'react';

class EventShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchEvent(this.props.eventId);
    }

    render() {
        const { event } = this.props;
        if (!event) return null;

        let ev = event;
        if (typeof event.organizer === undefined) {
            ev = this.props.fetchEvent(this.props.eventId);
        }

        console.log(event);
        console.log(ev)

        return (
            <div className="event-show-container">
                <div className="clip-promo-blur">
                    <img className="promo-blur" src={event.photoUrl} alt={event.title} />
                    <div className="clip"></div>
                </div>
                <main className="event-show">
                    <div className="es-top">
                        <img className="show-promo" src={event.photoUrl} alt={event.title} />
                        <div className="event-intro">
                            <div className="event-intro-textbox">
                                <h2>{event.date}</h2>
                                <h1>{event.title}</h1>
                                <h3>by {ev.organizer.fname} {ev.organizer.lname}</h3>
                            </div>
                        </div>
                    </div>
                    <div className="es-register">
                        <i className="far fa-heart"></i>
                        <button>Register</button>
                    </div>
                    <div className="es-body">
                        <div className="es-body-L">
                            <h1>About This Event</h1>
                            <p>placeholder description lol need to add to database</p>
                        </div >
                        <div className="es-body-R">
                            <p>{event.date}</p>
                        </div>
                    </div>
                </main>
            </div>
        )
    }

}

export default EventShow;


//Nahid example?
// const { track } = this.props;
// let trackShow;
// if (track) {
//     let artistName;
//     if (track.artist) {
//         artistName = track.artist
//     } else {
//         artistName = “Unknown”
//     }
//     trackShow = (
//             <div className=“track-header-container”>
//                 <a className=“track-header-play-icon”><FaPlayCircle /></a>
//                 <div className=“track-text-show-container”>
//                     <h1 className=“track-artist-show”>{artistName}</h1>
//                     <h1 className=“track-title-show”>{track.title} {track.email}</h1>
//                 </div >
//         <img className=“ track-artwork” src={track.photoUrl} alt={track.title} />
//             </div >
//         )
// } else {
//     trackShow = null
// };