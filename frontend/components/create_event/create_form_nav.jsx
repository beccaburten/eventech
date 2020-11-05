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
            end_date: "",
            end_time: "12:00",
            organizer_id: this.props.event.organizer_id,
            registration_type: "Free",
            photo: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.switchTab = this.switchTab.bind(this);
        this.update = this.update.bind(this);
        this.uploadFile = this.uploadFile.bind(this);
        this.errorHandling = this.errorHandling.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        if (Object.values(this.state).some(val => val === "")) {
             $("#submit_error").html("Photo and description required.")
         } else {
            Object.keys(this.state).map(key => {
                formData.append(`event[${key}]`, this.state[key])
            })
            let load = document.getElementById("loader");
            load.classList.add("loader");
            debugger;
            this.props.createEvent(formData).then((resp) => {
                this.props.history.push(`/events/${Object.values(resp.event)[0].id}`)
            })
         }
    }

    update(field) {
        return (e) => {
            if(field === 'category') {
                const categories = ['Education', 'Career & Networking', 'Tech Talks', 'Virtual Conferences', 'Diversity & Inclusion'];
                let i = categories.indexOf(e.target.value) + 1;
                this.setState({ category_id: i })
                $("#category_error").html("")
            } else if (field === 'start_time' || field === 'end_time'){
                let formatTime = '01-01-1970 ' + e.target.value + '-08:00';
                this.setState({ [field]: formatTime })
            } else {
                this.setState({ [field]: e.target.value })
                debugger;
                $(`#${field}_error`).html("")
            }
        }
    }

    uploadFile(e) {
        e.preventDefault();
        this.setState({photo: e.target.files[0]})
        // this.setState({photo: e.target.files[0]}, () => console.log(this.state))
    }

    switchTab(target) {
        return (e) => {
            e.preventDefault();
            if (!!this.state.title && !!this.state.category_id && !!this.state.url && !!this.state.date && !!this.state.end_date) {
                this.setState({ tab: target })
            } else {
                // window.alert("All fields are required, please fill them in to continue.")
                const categories = [this.state.title, this.state.category_id, this.state.url, this.state.date, this.state.end_date]
                categories.map((el, i) => {
                    debugger;
                    !el ? this.errorHandling(i) : el
                })
            }
        }
    }

    errorHandling(idx) {
        //category = this.state.title
        //id = title_error
        debugger;
        let errors = ["title_error", "category_error", "url_error", "date_error", "end_date_error"]
        let err = document.getElementById(`${errors[idx]}`) 
        err.innerHTML = "All fields required."
    }

    render() {
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
            </div>
        )
    }

    
}

export default CreateFormNav;