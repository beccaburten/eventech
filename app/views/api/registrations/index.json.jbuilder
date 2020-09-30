json.events do 
    @registrations.each do |reg|
        event = Event.find(reg.event_id)
        json.set! event.id do
            json.extract! event, :id, :title, :date, :start_time, :end_time, :registration_type, :url
            json.reg_id reg.id
            json.photoUrl url_for(event.photo) if event.photo.attached?
        end
    end
end

json.currentUser do
  json.extract! @user, :id, :fname, :lname, :email
end


# {
#   "1": {
#     "id": 1,
#     "title": "App Academy Info Session",
#     "date": "2021-09-24T00:00:00.000Z",
#     "start_time": "2021-09-24T09:00:00.000Z",
#     "end_time": "2021-09-24T11:00:00.000Z",
#     "registration_type": "free",
#     "url": "appacademy.io"
#   }
# }





# @registrations.each do |registered_event|
#     json.set! registered_event.id do
#       json.extract! event, :id, :title, :date, :start_time, :end_time, :category_id, :registration_type, :promo_pic, :url
#       json.photoUrl url_for(event.photo) if event.photo.attached?
#       json.organizer do
#           json.extract! event.organizer, :id, :fname, :lname
#     end
#     json.category do
#         json.extract! event.category, :id, :category
#     end
#   end
# end

