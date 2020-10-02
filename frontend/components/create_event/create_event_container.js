import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createEvent } from '../../actions/event_actions';
import CreateFormNav from './create_form_nav';

const mSTP = state => {
    debugger
    return ({   
        event: {
            tab: 'first',
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
    })
}


const mDTP = dispatch => {
    debugger
    return ({
        createEvent: (event) => dispatch(createEvent(event))
    })
}

export default withRouter(connect(mSTP, mDTP)(CreateFormNav));
