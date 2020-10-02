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
            organizer_id: this.props.organizer_id,
            registration_type: "Free",
            promo_pic: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.switchTab = this.switchTab.bind(this);
        this.update = this.update.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createEvent(this.state);
        this.props.history.push('/')
    }

    update(field) {
        return (e) => {
            if(field === 'category') {
                debugger;
                const categories = ['Education', 'Career & Networking', 'Tech Talks', 'Virtual Conferences', 'Diversity & Inclusion'];
                let i = categories.indexOf(e.target.value);
                this.setState({ category_id: i })
            } else {
                this.setState({ [field]: e.target.value })
            }
        }
    }

    switchTab(target) {
        return (e) => {
            e.preventDefault;
            this.setState({ tab: target})
        }
    }

    render() {
        debugger;
        return (
            <div>
                <div className="create-container">
                    <ul className="tab-navigation">
                        <li className={this.state.tab === 'first' ? 'selected' : null} onClick={this.switchTab('first')}>Basic Info</li>
                        <li className={this.state.tab === 'second' ? 'selected' : null} onClick={this.switchTab('second')}>Details</li>
                    </ul>
                    <div className="tab-content">
                        {this.state.tab === 'first' ? <FirstTab update={this.update} switchTab={this.switchTab} /> : <SecondTab update={this.update} handleSubmit={this.handleSubmit} />}
                    </div>
                </div>
                {/* { this.state.tab === 'second' ? <button onClick={this.handleSubmit}>Publish</button> : null } */}
            </div>
        )
    }

    
}

export default CreateFormNav;