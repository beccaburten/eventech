import * as SessionApiUtil from '../util/session_api_util';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const AUTHENTICATE_USER = 'AUTHENTICATE_USER';

// REGULAR ACTIONS
export const receiveCurrentUser = (currentUser) => {
    return {
        type: RECEIVE_CURRENT_USER,
        currentUser
    }
};

// export const authenticateUser = (bool) => {
//     return {
//         type: AUTHENTICATE_USER,
//         bool
//     }
// };

export const logoutCurrentUser = () => {
    return {
        type: LOGOUT_CURRENT_USER
    }
};

export const receiveErrors = (errors) => {
    return {
        type: RECEIVE_SESSION_ERRORS,
        errors //this will be a response JSON / errors array
    }
};

// THUNK ACTION CREATORS
export const login = (user) => (dispatch) => {
   return SessionApiUtil.login(user)
            .then(user => dispatch(receiveCurrentUser(user)),
                responseobj => dispatch(receiveErrors(responseobj.responseJSON))
                //.then(successcallbackarg1, failcallbackarg2)
   )          
};
// don't forget --> fail response is an OBJECT, not an array, so we have to key into the responseJSON

export const logout = () => dispatch => {
    return SessionApiUtil.logout()
            .then(() => dispatch(logoutCurrentUser()))
};
  
export const signup = (user) => (dispatch) => {
    return SessionApiUtil.signup(user)
        .then(user => dispatch(receiveCurrentUser(user)),
            responseobj => dispatch(receiveErrors(responseobj.responseJSON))
    )
};

export const checkForUser = (email) => (dispatch) => {
    return SessionApiUtil.checkForUser(email)
        // .then((bool) => dispatch(authenticateUser(bool)))
        // do I need to dispatch anything if I'm not changing state?
};
