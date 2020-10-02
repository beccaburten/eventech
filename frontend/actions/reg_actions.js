import * as RegistrationApiUtil from '../util/reg_api_util';

// export const RECEIVE_ALL_REGISTRATIONS = 'RECEIVE_ALL_REGISTRATIONS';
// export const RECEIVE_TICKET = 'RECEIVE_TICKET';
export const RECEIVE_REGISTRATION = 'RECEIVE_REGISTRATION';
export const DELETE_REGISTRATION = 'DELETE_REGISTRATION';
export const REGISTRATION_ERRORS =  'REGISTRATION_ERRORS';

//REGULAR ACTIONS

// const receiveAllReg = registrations => {
//     return {
//     type: RECEIVE_ALL_REGISTRATIONS,
//     registrations
//     }
// }; //this should go to events reducer and update the events there

//hits REGISTRATION SHOW to send back one event and current user info
// const fetchTicket = registration => {
//     return {
//         type: RECEIVE_TICKET,
//         registration
//     }
// };


// registration set up as: {user_id: #, event_id: #}
const receiveReg = registration => ({
    type: RECEIVE_REGISTRATION,
    registration
});

// unregistration set up as: {user_id: #, event_id: #}
const deleteReg = unregistration => ({
    type: DELETE_REGISTRATION,
    unregistration
});

const receiveErrors = errors => ({
    type: REGISTRATION_ERRORS,
    errors
});

//THUNK ACTION CREATORS


// export const fetchUserRegistrations = () => dispatch => (
//     RegistrationApiUtil.fetchUserRegistrations()
//         .then(registrations => dispatch(receiveAllReg(registrations)))
// );

// export const fetchRegistration = (regId) => dispatch => {
//      ;
//     return RegistrationApiUtil.fetchRegistration(regId)
//         .then(registration => dispatch(fetchTicket(registration)))
// }

//registration returned is hash with user and event ids
export const registerUser = (event_id) => dispatch => {
     
    return RegistrationApiUtil.registerUser(event_id).then(
        registration => (dispatch(receiveReg(registration))),
        err => { dispatch(receiveErrors(err.responseJSON)) }
    )
};

//ids is hash with both user and event registration
export const unregisterUser = (ids) => dispatch => {
     ;
    return RegistrationApiUtil.unregisterUser(ids)
        .then((unregistration) => dispatch(deleteReg(unregistration)))
};