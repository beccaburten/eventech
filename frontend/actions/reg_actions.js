import * as RegistrationApiUtil from '../util/reg_api_util';

export const RECEIVE_ALL_REGISTRATIONS = 'RECEIVE_ALL_REGISTRATIONS';
export const RECEIVE_REGISTRATION = 'RECEIVE_REGISTRATION';
export const DELETE_REGISTRATION = 'DELETE_REGISTRATION';
export const REGISTRATION_ERRORS =  'REGISTRATION_ERRORS';

//REGULAR ACTIONS

const receiveAllReg = registrations => ({
    type: RECEIVE_ALL_REGISTRATIONS,
    registrations
});

const receiveReg = registration => ({
    type: RECEIVE_REGISTRATION,
    registration
});

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