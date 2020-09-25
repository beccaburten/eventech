json.extract! @event, :id, :title, :date, :start_time, :end_time, :category_id, :registration_type, :promo_pic, :url

json.set! @event.organizer 

{
    event: {
        id: x, title: x ...
    },

}