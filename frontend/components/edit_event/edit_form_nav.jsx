import React from 'react';
import EditFirstTab from './edit_first_tab_form';
import EditSecondTab from './edit_second_tab_form';

class EditFormNav extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            tab: 'first',
            title: this.props.event.title,
            category_id: this.props.event.category_id,
            description: this.props.event.description,
            url: this.props.event.url,
            date: this.props.event.date,
            end_date: this.props.event.end_date,
            start_time: this.props.event.start_time,
            end_time: this.props.event.end_time,
            organizer_id: this.props.event.organizer_id,
            registration_type: "Free",
            photo: this.props.event.photo
        }
        
        this.handleEdit = this.handleEdit.bind(this);
        this.switchTab = this.switchTab.bind(this);
        this.update = this.update.bind(this);
        this.uploadFile = this.uploadFile.bind(this);
    }

    componentDidMount() {
        this.props.fetchEvent(this.props.eventId);
        this.setState({
            tab: 'first',
            title: this.props.event.title,
            category_id: this.props.event.category_id,
            description: this.props.event.description,
            url: this.props.event.url,
            date: this.props.event.date,
            end_date: this.props.event.end_date,
            start_time: this.props.event.start_time,
            end_time: this.props.event.end_time,
            organizer_id: this.props.event.organizer_id,
            registration_type: "Free",
            photo: this.props.event.photo
        })
    }


    handleEdit(e) {
        e.preventDefault();
        const formData = new FormData();
        Object.keys(this.state).map(key => {
            formData.append(`event[${key}]`, this.state[key])
        })

        for (let pair of formData.entries()) {
            console.log(pair[0]+ ' - ' + pair[1]); 
        }
        debugger;

        this.props.updateEvent(formData, this.props.event.id).then((resp) => {
            debugger;
            this.props.history.push(`/events/${this.props.event.id}`)
        })
    }

    update(field) {
        return (e) => {
            if(field === 'category') {
                const categories = ['Education', 'Career & Networking', 'Tech Talks', 'Virtual Conferences', 'Diversity & Inclusion'];
                let i = categories.indexOf(e.target.value) + 1;
                this.setState({ category_id: i })
            } else {
                this.setState({ [field]: e.target.value })
            }
        }
    }

    uploadFile(e) {
        e.preventDefault();
        this.setState({photo: e.target.files[0]}, () => console.log(this.state))
    }

    switchTab(target) {
        return (e) => {
            e.preventDefault();
            this.setState({ tab: target})
        }
    }

    render() {
        const {event} = this.props;
        if (!event) {
            return null
        } else {
            return (
                <div>
                    <div className="create-container">
                        <ul className="tab-navigation">
                            <li className={this.state.tab === 'first' ? 'selected' : null} onClick={this.switchTab('first')}>Basic Info</li>
                            <li className={this.state.tab === 'second' ? 'selected' : null} onClick={this.switchTab('second')}>Details</li>
                        </ul>
                        <div className="tab-content">
                            {this.state.tab === 'first' ? <EditFirstTab update={this.update} switchTab={this.switchTab} event={event} /> : <EditSecondTab update={this.update} handleEdit={this.handleEdit} uploadFile={this.uploadFile} event={event} />}
                        </div>
                    </div>
                </div>
            )
        }
    }

    
}

export default EditFormNav;