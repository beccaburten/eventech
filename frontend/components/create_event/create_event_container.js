import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createEvent } from '../../actions/event_actions';
import CreateFormNav from './create_form_nav';

const mSTP = state => {
    debugger
    return ({
        formType: 'Create Event'
    })
}


const mDTP = dispatch => {
    debugger
    return ({
        action: (event) => dispatch(createEvent(event))
    })
}

export default withRouter(connect(mSTP, mDTP)(CreateFormNav));
