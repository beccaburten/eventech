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
        console.log(event);

        if (!event) return null;
        return (
            <div>
                <img className="promo-blur" src={event.photoUrl} alt={event.title} />
                <main className="event-show">
                    <div className="top">
                        <img className="show-promo" src={event.photoUrl} alt={event.title} />
                        <div className="event-intro">
                            <h3>{event.date}</h3>
                            <h1>{event.title}</h1>
                            {/* <h2>by {event.organizer.fname} {event.organizer.lname}</h2> */}
                        </div>
                    </div>
                    <div className="register"></div>
                    <div className="body"></div>

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