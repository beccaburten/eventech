import React from 'react';

class SecondTab extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tab: "second",
            description: "",
            promo_pic: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // handleSubmit(e) {
    //     e.preventDefault();
    //     this.props.action(this.state);
    // }

    // update(field) {
    //     return (e) => {
    //         this.setState({ [field]: e.target.value })
    //     }
    // }

    render() {
        const { formType } = this.props;
        return (
            <div className="event-form">
                <form onSubmit={this.handleSubmit}>
                    <h2><i className="fas fa-align-justify"></i>Description</h2>
                    <h3>Add more details to your event like your schedule, sponsors, or featured guests.</h3>
                    <label htmlFor="description" value={this.state.description}>Description</label>
                    <textarea value={this.state.description} onChange={this.props.update('description')} />
                {/* importing a promo_pic  */}
                    <input type="submit" value={formType} />
                </form>

            </div>

        )
    }


}

export default SecondTab;