import React from 'react';

class SecondTab extends React.Component {

    constructor(props) {
        super(props);
        this.state = {submit_error: ""}
    }
    render() {
        return (
            <div className="event-form">
                <form>
                    <h2><i className="far fa-image"></i> Main Event Image</h2>
                    <h3>This is the first image attendees will see at the top of your listing.</h3>
                    <input type="file" className="upload-file" onChange={this.props.uploadFile} />
 

                    <h2><i className="fas fa-align-justify"></i> Description</h2>
                    <h3>Add more details to your event like your schedule, sponsors, or featured guests.</h3>
                    
                    <div className="outer-desc-selector"> Description
                            <textarea className="text-input" onChange={this.props.update('description')} />
                    </div>
                    <p id="submit_error" className="errors">{this.state.tsubmit_error}</p>
                    <button onClick={this.props.handleSubmit}>Publish</button>
                </form>

            </div>

        )
    }


}

export default SecondTab;