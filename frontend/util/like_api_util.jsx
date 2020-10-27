
export const likeEvent = (event_id) => {
    return $.ajax({
        method: "POST",
        url: `/api/events/${event_id}/likes`,
    })
}

export const unlikeEvent = (ids) => {
    
    return $.ajax({
        method: "DELETE",
        url: `/api/like`,
        data: ids
    })
};