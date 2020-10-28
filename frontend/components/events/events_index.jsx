import React from 'react';
import EventIndexItem from './event_index_item';

class EventsIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = { category: '' }
        this.filter = this.filter.bind(this)
    }

    componentDidMount() {
        this.props.fetchEvents();
    }

    filter(category) {
        $('.filter-list li').removeClass('selected');
        debugger;
        $(`#${category}`).addClass('selected');
        this.setState({category: category}); //categories will be abbrevs
    }

    //  const categories = ['Education', 'Career & Networking', 'Tech Talks', 'Virtual Conferences', 'Diversity & Inclusion'];
    //             let i = categories.indexOf(e.target.value) + 1;
    //             this.setState({ category_id: i })

    render() {
        const {events, createLike, destroyLike, currentUserId, likedEvents} = this.props;
        return (
        <div className="splash">
            <div className="splash-banner">
                <img src={window.splashBanner} alt="https://www.freepik.com/vectors/people"/>
                <div className="splash-text">
                    <h3>Bring the internetwork to your personal network.</h3>
                    <h1>Free virtual tech events: </h1>
                    <a href="#jump-to-events">Browse events <i className="fas fa-arrow-right"></i></a>
                    {/* <button>Browse events <i className="fas fa-arrow-right"></i></button> */}
                </div>
            </div>
            <div className="filter-banner">
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
            <div id="jump-to-events" className="grid-container">
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
