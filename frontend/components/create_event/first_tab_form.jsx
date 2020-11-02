import React from 'react';

class FirstTab extends React.Component {

    constructor(props) {
        super(props);
        this.state = {category: null, title_error: "", category_error: "", url_err: "", time1_err: "", time2_err: ""}
    }

    render() {
        return (
            <div className="event-form">
                <form>
                    <div className="form-slice">
                        <h2><i className="fas fa-align-justify"></i> Basic Info</h2>
                        <h3>Name your event and tell event-goers why they should come.</h3>
                        <h3>Add details that highlight what makes it unique.</h3>
                        <br></br>
                        <div className="outer-selector">Event Title
                            <input className="text-input" id="title" type="text" onChange={this.props.update('title')} onBlur={(e) => !e.target.value ? this.setState({title_error: "All fields required"}) : this.setState({title_error: ""})} required />
                        </div>
                        <p className="errors">{this.state.title_error}</p>

                        <div className="outer-selector">
                            <select name="category" id="category" defaultValue={'DEFAULT'} onChange={this.props.update('category')} onBlur={(e) => !e.target.value ? this.setState({category_error: "All fields required"}) : this.setState({category_error: ""})} required >
                                <option value="DEFAULT" disabled>Category</option>
                                <option value="Education">Education</option>
                                <option value="Career & Networking">Career & Networking</option>
                                <option value="Tech Talks">Tech Talks</option>
                                <option value="Virtual Conferences">Virtual Conferences</option>
                                <option value="Diversity & Inclusion">Diversity & Inclusion</option>
                            </select>
                        </div>
                        <p className="errors">{this.state.category_error}</p>

                    </div>

                    <div className="form-slice">
                        <h2><i className="fas fa-desktop"></i> Location</h2>
                        <h3>Help people discover more of your events and let attendees know where to show up.</h3>
                        <div className="outer-selector"> Event URL 
                            <input className="text-input" id="url" type="url" onChange={this.props.update('url')} onBlur={(e) => !e.target.value ? this.setState({url_err: "All fields required"}) : this.setState({url_err: ""})} required/>
                        </div>
                    <p className="errors">{this.state.url_err}</p>

                    </div>

                    <div className="form-slice">
                        <h2><i className="far fa-calendar-alt"></i> Date and Time</h2>
                        <h3>Tell event-goers when your event starts and ends so they can make plans to attend.</h3>
                        <br></br>
                        <div className="time-flex">
                            <div className="outer-selector"> Event Starts
                                <input className="time-selector" id="date" type="date" onChange={this.props.update('date')} onBlur={(e) => !e.target.value ? this.setState({time1_err: "All fields required"}) : this.setState({time1_err: ""})} required />
                            </div>
                            <br></br>
                            <div className="outer-selector"> Start Time
                                <select className="time-selector" name="start_time" id="start_time" onChange={this.props.update('start_time')} required>
                                    <option value="12:00 AM">12:00 AM</option>
                                    <option value="12:30 AM">12:30 AM</option>
                                    <option value="1:00 AM">1:00 AM</option>
                                    <option value="1:30 AM">1:30 AM</option>
                                    <option value="2:00 AM">2:00 AM</option>
                                    <option value="2:00 AM">2:30 AM</option>
                                    <option value="3:00 AM">3:00 AM</option>
                                    <option value="3:30 AM">3:30 AM</option>
                                    <option value="4:00 AM">4:00 AM</option>
                                    <option value="4:30 AM">4:30 AM</option>
                                    <option value="5:00 AM">5:00 AM</option>
                                    <option value="5:30 AM">5:30 AM</option>
                                    <option value="6:00 AM">6:00 AM</option>
                                    <option value="6:30 AM">6:30 AM</option>
                                    <option value="7:00 AM">7:00 AM</option>
                                    <option value="7:30 AM">7:30 AM</option>
                                    <option value="8:00 AM">8:00 AM</option>
                                    <option value="8:30 AM">8:30 AM</option>
                                    <option value="9:00 AM">9:00 AM</option>
                                    <option value="9:30 AM">9:30 AM</option>
                                    <option value="10:00 AM">10:00 AM</option>
                                    <option value="10:30 AM">10:30 AM</option>
                                    <option value="11:00 AM">11:00 AM</option>
                                    <option value="11:30 AM">11:30 AM</option>
                                    <option value="12:00 PM">12:00 PM</option>
                                    <option value="12:30 PM">12:30 PM</option>
                                    <option value="1:00 PM">1:00 PM</option>
                                    <option value="1:30 PM">1:30 PM</option>
                                    <option value="2:00 PM">2:00 PM</option>
                                    <option value="2:00 PM">2:30 PM</option>
                                    <option value="3:00 PM">3:00 PM</option>
                                    <option value="3:30 PM">3:30 PM</option>
                                    <option value="4:00 PM">4:00 PM</option>
                                    <option value="4:30 PM">4:30 PM</option>
                                    <option value="5:00 PM">5:00 PM</option>
                                    <option value="5:30 PM">5:30 PM</option>
                                    <option value="6:00 PM">6:00 PM</option>
                                    <option value="6:30 PM">6:30 PM</option>
                                    <option value="7:00 PM">7:00 PM</option>
                                    <option value="7:30 PM">7:30 PM</option>
                                    <option value="8:00 PM">8:00 PM</option>
                                    <option value="8:30 PM">8:30 PM</option>
                                    <option value="9:00 PM">9:00 PM</option>
                                    <option value="9:30 PM">9:30 PM</option>
                                    <option value="10:00 PM">10:00 PM</option>
                                    <option value="10:30 PM">10:30 PM</option>
                                    <option value="11:00 PM">11:00 PM</option>
                                    <option value="11:30 PM">11:30 PM</option>
                                </select>
                            </div>
                        </div>
                        <p className="errors">{this.state.time1_err}</p>

                        <br></br>
                        <div className="time-flex">
                            <div className="outer-selector"> Event Ends
                                <input className="time-selector" id="end_date" type="date" onChange={this.props.update('end_date')} onBlur={(e) => !e.target.value ? this.setState({time2_err: "All fields required"}) : this.setState({time2_err: ""})} required />
                            </div>
                            <br></br>
                            <div className="outer-selector"> End Time
                                <select name="end_time" className="time-selector" id="end_time" onChange={this.props.update('end_time')} required>
                                    <option value="12:00 AM">12:00 AM</option>
                                    <option value="12:30 AM">12:30 AM</option>
                                    <option value="1:00 AM">1:00 AM</option>
                                    <option value="1:30 AM">1:30 AM</option>
                                    <option value="2:00 AM">2:00 AM</option>
                                    <option value="2:00 AM">2:30 AM</option>
                                    <option value="3:00 AM">3:00 AM</option>
                                    <option value="3:30 AM">3:30 AM</option>
                                    <option value="4:00 AM">4:00 AM</option>
                                    <option value="4:30 AM">4:30 AM</option>
                                    <option value="5:00 AM">5:00 AM</option>
                                    <option value="5:30 AM">5:30 AM</option>
                                    <option value="6:00 AM">6:00 AM</option>
                                    <option value="6:30 AM">6:30 AM</option>
                                    <option value="7:00 AM">7:00 AM</option>
                                    <option value="7:30 AM">7:30 AM</option>
                                    <option value="8:00 AM">8:00 AM</option>
                                    <option value="8:30 AM">8:30 AM</option>
                                    <option value="9:00 AM">9:00 AM</option>
                                    <option value="9:30 AM">9:30 AM</option>
                                    <option value="10:00 AM">10:00 AM</option>
                                    <option value="10:30 AM">10:30 AM</option>
                                    <option value="11:00 AM">11:00 AM</option>
                                    <option value="11:30 AM">11:30 AM</option>
                                    <option value="12:00 PM">12:00 PM</option>
                                    <option value="12:30 PM">12:30 PM</option>
                                    <option value="1:00 PM">1:00 PM</option>
                                    <option value="1:30 PM">1:30 PM</option>
                                    <option value="2:00 PM">2:00 PM</option>
                                    <option value="2:00 PM">2:30 PM</option>
                                    <option value="3:00 PM">3:00 PM</option>
                                    <option value="3:30 PM">3:30 PM</option>
                                    <option value="4:00 PM">4:00 PM</option>
                                    <option value="4:30 PM">4:30 PM</option>
                                    <option value="5:00 PM">5:00 PM</option>
                                    <option value="5:30 PM">5:30 PM</option>
                                    <option value="6:00 PM">6:00 PM</option>
                                    <option value="6:30 PM">6:30 PM</option>
                                    <option value="7:00 PM">7:00 PM</option>
                                    <option value="7:30 PM">7:30 PM</option>
                                    <option value="8:00 PM">8:00 PM</option>
                                    <option value="8:30 PM">8:30 PM</option>
                                    <option value="9:00 PM">9:00 PM</option>
                                    <option value="9:30 PM">9:30 PM</option>
                                    <option value="10:00 PM">10:00 PM</option>
                                    <option value="10:30 PM">10:30 PM</option>
                                    <option value="11:00 PM">11:00 PM</option>
                                    <option value="11:30 PM">11:30 PM</option>
                                </select>
                            </div>
                        </div>
                        <p className="errors">{this.state.time2_err}</p>
                    </div>
                    <button onClick={this.props.switchTab('second')}>Save & Continue</button>
                    {/* <button onClick={Object.values(this.state).every(el => el !== "All fields required") ? this.props.switchTab('second') : this.setState({time2_err: "All fields required"})}>Save & Continue</button> */}
                </form>
            </div>

        )
    }


}

export default FirstTab;