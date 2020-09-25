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

export const createEvent = (event) => {
    return $.ajax({
        method: "POST",
        url: '/api/events',
        data: { event }
    })
}

export const updateEvent = (event) => (
    $.ajax({
        method: "PATCH",
        url: `/api/events/${event.id}`,
        data: { event }
    })
);

export const destroyEvent = (eventId) => (
    $.ajax({
        method: "DELETE",
        url: `/api/events/${eventId}`
    })
);