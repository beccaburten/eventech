import React from 'react';

class EditSecondTab extends React.Component {

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
            this.setState({ [field]: e.target.value });
        }
    }

    render() {
        const { handleEdit } = this.props;
        return (
            <div className="event-form">
                <form>
                    <h2><i className="far fa-image"></i> Main Event Image</h2>
                    <h3>This is the first image attendees will see at the top of your listing.</h3>
                    <input type="file" className="upload-file" onChange={this.props.uploadFile} />
 

                    <h2><i className="fas fa-align-justify"></i> Description</h2>
                    <h3>Add more details to your event like your schedule, sponsors, or featured guests.</h3>
                    
                    <div className="outer-desc-selector"> Description
                            <textarea className="text-input" defaultValue={this.state.description} onChange={this.localUpdate('description')} />
                    </div>

                    <button onClick={handleEdit}>Publish</button>
                </form>

            </div>

        )
    }


}

export default EditSecondTab;