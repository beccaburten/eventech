import * as SessionApiUtil from '../util/session_api_util';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';

// REGULAR ACTIONS
export const receiveCurrentUser = (currentUser) => {
    return {
        type: RECEIVE_CURRENT_USER,
        currentUser
    }
};


export const logoutCurrentUser = () => {
    return {
        type: LOGOUT_CURRENT_USER
    }
};

export const receiveSessionErrors = (errors) => {
    return {
        type: RECEIVE_SESSION_ERRORS,
        errors //this will be a response JSON / errors array
    }
};

// THUNK ACTION CREATORS

export const login = (user) => (dispatch) => {
   return SessionApiUtil.login(user)
            .then(user => dispatch(receiveCurrentUser(user)),
                errors => dispatch(receiveSessionErrors(errors.responseJSON))
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
            errors => dispatch(receiveSessionErrors(errors.responseJSON))
    )
};

// export const signup = (user) => (dispatch) => {
//     return SessionApiUtil.signup(user)
//         .then(user => dispatch(receiveCurrentUser(user)),
//             errors => dispatch(receiveSessionErrors(errors))
//     )
// };

export const checkForUser = (email, object) => () => {
    return SessionApiUtil.checkForUser(email)
        .done(() => object.setState({ verified: 'true' }))
            .fail(() => object.setState({ verified: 'false' }))
        // .then(() => object.setState({verified: 'true'}),
        //     () => object.setState({ verified: 'false' }))
}

//thing I was missing: binding to object by passing obj as an arg
// can setState within the callback here now that obj is passed in


        // .then((bool) => dispatch(authenticateUser(bool)))
        // need to change state to trigger re-render
        /// ...but what part of state changes with true/false
