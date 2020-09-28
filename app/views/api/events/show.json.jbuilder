evId = @event.id

json.event do
    json.set! evId do
        json.extract! @event, :id, :title, :date, :start_time, :end_time, :organizer_id, :category_id, :registration_type, :url
        json.photoUrl url_for(@event.photo) if @event.photo.attached?
    end
end

json.organizer do
    json.extract! @event.organizer, :id, :fname, :lname
end

json.category do
    json.extract! @event.category, :id, :category
end

# Example Output:
# {
#     "event": {
#         "id": 24,
#         "title": "Diversity In Tech Webinar",
#         "date": "2021-04-03T00:00:00.000Z",
#         "start_time": "2021-04-03T12:00:00.000Z",
#         "end_time": "2021-04-03T15:00:00.000Z",
#         "registration_type": "RSVP",
#         "url": "diversifytech.co",
#         "photoUrl": "/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBFUT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--e18bde2748b35056620c3da088818ff2b913eb13/div.jpg",
#         "organizer": {
#             "id": 29,
#             "fname": "Gabo",
#             "lname": "Barrio"
#         },
#         "category": {
#             "id": 20,
#             "category": "Diversity & Inclusion"
#         }
#     }
# }