import React from 'react';
import {EventIndexItem} from './event_index_item';

class EventsIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = { category_id: 0 }
        this.filter = this.filter.bind(this);
        this.scroll = this.scroll.bind(this);
    }

    componentDidMount() {
        this.props.fetchEvents();
    }

    filter(category) {
        $('.filter-list li').removeClass('selected');
        $(`#${category}`).addClass('selected');
        const categories = {all: 0, ed: 1, cn: 2, tt: 3, vc: 4, di: 5};
        this.setState({category_id: categories[category]}); 
    }

    scroll(e) {
        e.preventDefault();
        let index = document.getElementById("jump-to-events");
        index.scrollIntoView({behavior: 'smooth', block: 'start'});
    }

    render() {
        const {events, createLike, destroyLike, currentUserId, likedEvents} = this.props;

        let filteredEvents;
        if (this.state.category_id !== 0) {
            filteredEvents = events.filter(ev => ev.category_id === this.state.category_id);
        } else {
            filteredEvents = events;
        }

        return (
        <div className="splash">
            <div className="splash-banner">
                <img src={window.splashBanner} alt="https://www.freepik.com/vectors/people"/>
                <div className="splash-text">
                    <h3>Bring the internetwork to your personal network.</h3>
                    <h1>Free virtual tech events: </h1>
                    <a onClick={this.scroll}>Browse events <i className="fas fa-arrow-right"></i></a>
                    {/* <button>Browse events <i className="fas fa-arrow-right"></i></button> */}
                </div>
            </div>
            <div id="jump-to-events" className="filter-banner">
                <h1>Popular in <p id="online-events">Online Events</p></h1>
                <ul className="filter-list">
                    <li className= "selected" id="all" onClick={()=> this.filter('all')}>All</li>
                    <li id="ed" onClick={()=> this.filter('ed')}>Education</li>
                    <li id="cn" onClick={()=> this.filter('cn')}>Career & Networking</li>
                    <li id="tt" onClick={()=> this.filter('tt')}>Tech Talks</li>
                    <li id="vc" onClick={()=> this.filter('vc')}>Virtual Conferences</li>
                    <li id="di" onClick={()=> this.filter('di')}>Diversity & Inclusion</li>
                </ul>
            </div>
            <div className="grid-container">
                { filteredEvents.length > 0 ?
                    filteredEvents.map((event,i) => (
                        <EventIndexItem key={`${i}`} event={event} eventId={event.id} createLike={createLike} destroyLike={destroyLike} currentUserId={currentUserId} likedEvents={likedEvents} />
                    ))
                    :
                    <p>No upcoming events in this category, check back soon!</p>
                }
            </div>
        </div>
        )
    }
}

export default EventsIndex;
