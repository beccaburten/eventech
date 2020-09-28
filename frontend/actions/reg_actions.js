import * as RegistrationApiUtil from '../util/reg_api_util';

export const RECEIVE_ALL_REGISTRATIONS = 'RECEIVE_ALL_REGISTRATIONS';
export const RECEIVE_REGISTRATION = 'RECEIVE_REGISTRATION';
export const DELETE_REGISTRATION = 'DELETE_REGISTRATION';
export const REGISTRATION_ERRORS =  'REGISTRATION_ERRORS';

//REGULAR ACTIONS

const receiveAllReg = registrations => {
    return {
    type: RECEIVE_ALL_REGISTRATIONS,
    registrations
    }
}; //this should go to events reducer and update the events there


// these actions go to the users reducer
const receiveReg = registration => ({
    type: RECEIVE_REGISTRATION,
    registration
});
//registration create now sends a USER with the new association added via model

const deleteReg = regId => ({
    type: DELETE_REGISTRATION,
    regId
});

const receiveErrors = errors => ({
    type: REGISTRATION_ERRORS,
    errors
});

//THUNK ACTION CREATORS


export const fetchUserRegistrations = () => dispatch => (
    RegistrationApiUtil.fetchUserRegistrations()
        .then(registrations => dispatch(receiveAllReg(registrations)))
);

export const registerUser = (registration) => dispatch => (
    RegistrationApiUtil.registerUser(registration).then(
        registration => (dispatch(receiveReg(registration))),
        err => { dispatch(receiveErrors(err.responseJSON)) }
    )
);

export const unregisterUser = (registrationId) => dispatch => (
    RegistrationApiUtil.unregisterUser(registrationId)
        .then(() => dispatch(deleteReg(registrationId)))
);