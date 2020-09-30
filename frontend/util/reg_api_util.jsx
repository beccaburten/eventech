export const fetchUserRegistrations = (userId) => {
    return $.ajax({
        method: "GET",
        url: `/api/registrations`
    })
};

export const fetchRegistration = (regId) => {
    debugger;
    return $.ajax({
        method: "GET",
        url: `/api/registrations/${regId}`
    })
};

export const registerUser = (registration) => {
    return $.ajax({
        method: "POST",
        url: `/api/events/${registration.event_id}/registrations`,
        data: { registration }
    })
}

export const unregisterUser = (regId) => {
    debugger;
    return $.ajax({
        method: "DELETE",
        url: `/api/registrations/${regId}`
    })
};