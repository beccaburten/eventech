import React from 'react';
import FirstTab from './first_tab_form';
import SecondTab from './second_tab_form';

class CreateFormNav extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tab: 'first',
            title: "",
            category_id: null,
            description: "",
            url: "",
            date: "",
            start_time: "12:00",
            end_time: "12:00",
            organizer_id: this.props.event.organizer_id,
            registration_type: "Free",
            photo: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.switchTab = this.switchTab.bind(this);
        this.update = this.update.bind(this);
        this.uploadFile = this.uploadFile.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        Object.keys(this.state).map(key => {
            formData.append(`event[${key}]`, this.state[key])
        })
         ;
        this.props.createEvent(formData).then(() => this.props.history.push('/'))
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
         ;
        this.setState({photo: e.target.files[0]}, () => console.log(this.state))
    }

    switchTab(target) {
        return (e) => {
            e.preventDefault;
            this.setState({ tab: target})
        }
    }

    render() {
         ;
        return (
            <div>
                <div className="create-container">
                    <ul className="tab-navigation">
                        <li className={this.state.tab === 'first' ? 'selected' : null} onClick={this.switchTab('first')}>Basic Info</li>
                        <li className={this.state.tab === 'second' ? 'selected' : null} onClick={this.switchTab('second')}>Details</li>
                    </ul>
                    <div className="tab-content">
                        {this.state.tab === 'first' ? <FirstTab update={this.update} switchTab={this.switchTab} /> : <SecondTab update={this.update} handleSubmit={this.handleSubmit} uploadFile={this.uploadFile} />}
                    </div>
                </div>
                {/* { this.state.tab === 'second' ? <button onClick={this.handleSubmit}>Publish</button> : null } */}
            </div>
        )
    }

    
}

export default CreateFormNav;