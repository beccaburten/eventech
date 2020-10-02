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
        //  ;
        const {events} = this.props;
        return (
        <div className="grid-container">
            {events.map((event,i) => (
                <EventIndexItem key={`${i}`} event={event} eventId={event.id} />
            ))
            }
        </div>
        )
    }
}

export default EventsIndex;
