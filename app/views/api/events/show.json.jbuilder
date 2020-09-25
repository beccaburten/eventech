json.event do
    debugger
    json.extract! @event, :id, :title, :date, :start_time, :end_time, :category_id, :registration_type, :promo_pic, :url
end

json.organizer do
    json.extract! @event.organizer, :id, :fname, :lname
end

json.category do
    json.extract! @event.category, :id, :category
end


# {
#     event: {
#         id: x, title: x ...
#     },
#     organizer: {
#         id: x, fname: x, lname: x        
#     }
#     category: {
#         id: x, category: x         
#     }

# }