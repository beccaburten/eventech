import React from 'react';

class EventIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const{event} = this.props;
        return (
            <div className="grid-item">
                <h1>{event.title}</h1>
            </div>
        )
    }
}

export default EventIndexItem;