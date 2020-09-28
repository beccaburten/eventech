export const fetchUserRegistrations = (userId) => {
    return $.ajax({
        method: "GET",
        url: `/api/registrations`
    })
};

export const registerUser = (registration) => {
    return $.ajax({
        method: "POST",
        url: `/api/events/${registration.event_id}/registrations`,
        data: { registration }
    })
}

export const unregisterUser = (registrationId) => (
    $.ajax({
        method: "DELETE",
        url: `/api/registrations/${registrationId}`
    })
);