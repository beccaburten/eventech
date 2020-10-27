import React from 'react';
import {formatTime} from '../../util/format_util';

class EditFirstTab extends React.Component {

    constructor(props) {
        super(props);
        // this.state = {category: null}
        this.state = {
            tab: 'first',
            title: this.props.event.title,
            category_id: this.props.event.category_id,
            url: this.props.event.url,
            date: this.props.event.date,
            end_date: this.props.event.end_date,
            start_time: this.props.event.start_time,
            end_time: this.props.event.end_time,
        }
        this.localUpdate = this.localUpdate.bind(this);
    }

    identifyCategory() {     
        const categories = ['Education', 'Career & Networking', 'Tech Talks', 'Virtual Conferences', 'Diversity & Inclusion'];
        let i = this.state.category_id - 1;
        return categories[i]
    }

    localUpdate(field) {
        debugger;
        this.props.update(field);
        // return (e) => {
        //     if(field === 'category') {
        //         const categories = ['Education', 'Career & Networking', 'Tech Talks', 'Virtual Conferences', 'Diversity & Inclusion'];
        //         let i = categories.indexOf(e.target.value) + 1;
        //         this.setState({ category_id: i })
        //     } else {
        //         this.setState({ [field]: e.target.value })
        //     }
        // }
    }

    render() {
        return (
            <div className="event-form">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-slice">
                        <h2><i className="fas fa-align-justify"></i> Basic Info</h2>
                        <h3>Name your event and tell event-goers why they should come.</h3>
                        <h3>Add details that highlight what makes it unique.</h3>
                        <br></br>
                        <div className="outer-selector">Event Title
                            {/* <input className="text-input" id="title" type="text" onChange={this.props.update('title')} value={this.state.title} required /> */}
                            <input className="text-input" id="title" type="text" onChange={this.localUpdate('title')} defaultValue={this.state.title} required />
                        </div>
                        <div className="outer-selector">
                            <select name="category" id="category" defaultValue={this.identifyCategory()} onChange={this.localUpdate('category')} required >
                                {/* <option value="Category" selected disabled={true}>Category</option> */}
                                <option value="DEFAULT" disabled>Category</option>
                                <option value="Education">Education</option>
                                <option value="Career & Networking">Career & Networking</option>
                                <option value="Tech Talks">Tech Talks</option>
                                <option value="Virtual Conferences">Virtual Conferences</option>
                                <option value="Diversity & Inclusion">Diversity & Inclusion</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-slice">
                        <h2><i className="fas fa-desktop"></i> Location</h2>
                        <h3>Help people discover more of your events and let attendees know where to show up.</h3>
                        <div className="outer-selector"> Event URL 
                            <input className="text-input" id="url" type="url" defaultValue={this.state.url} onChange={this.localUpdate('url')} />
                        </div>
                    </div>

                    <div className="form-slice">
                        <h2><i className="far fa-calendar-alt"></i> Date and Time</h2>
                        <h3>Tell event-goers when your event starts and ends so they can make plans to attend.</h3>
                        <br></br>
                        {/* <label htmlFor="date">Event Starts</label> */}
                        <div className="time-flex">
                            <div className="outer-selector"> Event Starts
                                <input className="time-selector" id="date" type="date" defaultValue={this.state.date.slice(0,10)} onChange={this.localUpdate('date')} required />
                            </div>
                            <br></br>
                            <div className="outer-selector"> Start Time
                                <select className="time-selector" name="start_time" id="start_time" defaultValue={formatTime(this.state.start_time)} onChange={this.localUpdate('start_time')} required>
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
                        <br></br>
                        <div className="time-flex">
                            <div className="outer-selector"> Event Ends
                                <input className="time-selector" id="end_date" type="date" defaultValue={this.state.end_date.slice(0,10)} onChange={this.localUpdate('end_date')} required />
                            </div>
                            <br></br>
                            <div className="outer-selector"> End Time
                                <select name="end_time" className="time-selector" id="end_time" defaultValue={formatTime(this.state.end_time)} onChange={this.localUpdate('end_time')} required>
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
                    </div>

                    <button onClick={this.props.switchTab('second')}>Save & Continue</button>
                </form>
            </div>

        )
    }


}

export default EditFirstTab;