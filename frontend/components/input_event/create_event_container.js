import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createEvent } from '../../actions/event_actions';
import EventFormNav from './event_form_nav';

const mSTP = state => {
    debugger
    return ({
        event: { title : "",
            category_id: null,
            description: "",
            url: "",
            date: "",
            start_time: "",
            end_time: "", 
            organizer_id: state.session.id,
            registration_type: "Free",
            promo_pic: ""
        },
        formType: 'Create Event'
    })
}


const mDTP = dispatch => {
    debugger
    return ({
        action: (event) => dispatch(createEvent(event))
    })
}

export default withRouter(connect(mSTP, mDTP)(EventFormNav));
