export const fetchEvents = () => {
    return $.ajax({
        method: "GET",
        url: "/api/events",
    })
};

export const fetchEvent = (eventId) => {
    return $.ajax({
        method: "GET",
        url: `/api/events/${eventId}`,
    })
};

export const createEvent = (formData) => {
    return $.ajax({
        method: "POST",
        url: '/api/events',
        data: formData,
        contentType: false,
        processData: false
    })
}

export const updateEvent = (formData, eventId) => {
    debugger;
    return $.ajax({
        method: "PATCH",
        url: `/api/events/${eventId}`,
        data: formData,
        contentType: false,
        processData: false
    })
};

export const destroyEvent = (eventId) => (
    $.ajax({
        method: "DELETE",
        url: `/api/events/${eventId}`
    })
);