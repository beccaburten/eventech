import React from 'react';

class SecondTab extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            description: this.props.event.description,
            photo: this.props.event.photo
        }
        this.localUpdate = this.localUpdate.bind(this);
    }

    localUpdate(field) {
        return (e) => {
            this.props.update(field);
            if(field === 'category') {
                const categories = ['Education', 'Career & Networking', 'Tech Talks', 'Virtual Conferences', 'Diversity & Inclusion'];
                let i = categories.indexOf(e.target.value) + 1;
                this.setState({ category_id: i })
            } else {
                this.setState({ [field]: e.target.value })
            }
        }
    }

    render() {
        const {event} = this.props;
        return (
            <div className="event-form">
                <form>
                    <h2><i className="far fa-image"></i> Main Event Image</h2>
                    <h3>This is the first image attendees will see at the top of your listing.</h3>
                    <input type="file" className="upload-file" onChange={this.props.uploadFile} />
 

                    <h2><i className="fas fa-align-justify"></i> Description</h2>
                    <h3>Add more details to your event like your schedule, sponsors, or featured guests.</h3>
                    
                    <div className="outer-desc-selector"> Description
                            <textarea className="text-input" value={this.state.description} onChange={this.localUpdate('description')} />
                    </div>

                    <button onClick={this.props.handleUpdate}>Publish</button>
                </form>

            </div>

        )
    }


}

export default SecondTab;