
json.user_id @user_id
json.event_id @event_id.to_i

# json.event do 
#     event = Event.find(@registration.event_id)
#     json.set! event.id do
#         json.extract! event, :id, :title, :date, :start_time, :end_time, :registration_type, :url
#         json.reg_id @registration.id
#         json.photoUrl url_for(event.photo) if event.photo.attached?
#     end
# end

# json.user do
#   json.extract! @user, :id, :fname, :lname, :email
# end

