import React from 'react';
import FirstTab from './first_tab_form';

class CreateFormNav extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tab: "first",
            title: "",
            category_id: null,
            description: "",
            url: "",
            date: "",
            start_time: "",
            end_time: "",
            organizer_id: state.session.id,
            registration_type: "Free",
            promo_pic: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state);
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value })
        }
    }

    render() {
        const {formType} = this.props;
        return (
            <div>
            </div>
            
        )
    }

    
}

export default CreateFormNav;