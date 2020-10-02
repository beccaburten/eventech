import React from 'react';

class SecondTab extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="event-form">
                <form>
                {/* importing a promo_pic  */}

                    <input onChange={this.props.uploadFile} type="file" />

                    <h2><i className="fas fa-align-justify"></i> Description</h2>
                    <h3>Add more details to your event like your schedule, sponsors, or featured guests.</h3>
                    
                    <div className="outer-desc-selector"> Description
                            <textarea className="text-input" onChange={this.props.update('description')} />
                    </div>

                    <button onClick={this.props.handleSubmit}>Publish</button>
                </form>

            </div>

        )
    }


}

export default SecondTab;