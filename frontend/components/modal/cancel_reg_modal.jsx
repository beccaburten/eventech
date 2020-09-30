import { connect } from 'react-redux';
import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import RegistrationContainer from './registration_container';
// import EventDelete from '../events/event_delete';

const Modal = ({ modal, closeModal }) => {
    if (!modal) {
        return null;
    } else {
        return (
            <div className="modal-background" onClick={closeModal}>
                <div className="modal-child" onClick={e => e.stopPropagation()}>
                    <CancelRegistration />
                </div>
            </div>
        );
    }
}

const mSTP = state => {
    return {
        modal: state.ui.modal
    };
};

const mDTP = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mSTP, mDTP)(Modal);
