import { connect } from 'react-redux';
import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import CancelOrderContainer from './cancel_container';
// import EventDelete from '../events/event_delete';

const CancelModal = ({ modal, closeModal }) => {
    if (modal !== "cancel-order") {
        return null;
    } else {
        return (
            <div className="modal-background" onClick={closeModal}>
                <div className="modal-child" onClick={e => e.stopPropagation()}>
                    <CancelOrderContainer />
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

export default connect(mSTP, mDTP)(CancelModal);
