// export const fetchUserRegistrations = (userId) => {
//     return $.ajax({
//         method: "GET",
//         url: `/api/registrations`
//     })
// };

// export const fetchRegistration = (regId) => {
//     debugger;
//     return $.ajax({
//         method: "GET",
//         url: `/api/registrations/${regId}`
//     })
// };

export const registerUser = (event_id) => {
    return $.ajax({
        method: "POST",
        url: `/api/events/${event_id}/registrations`,
        // data: { registration }
    })
}

export const unregisterUser = (ids) => {
    debugger;
    return $.ajax({
        method: "DELETE",
        url: `/api/registration`,
        data: ids
    })
};