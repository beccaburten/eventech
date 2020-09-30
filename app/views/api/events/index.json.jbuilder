@events.each do |event|
  json.set! event.id do
      json.extract! event, :id, :title, :date, :start_time, :end_time, :category_id, :organizer_id, :description
      json.attendees event.attendees.pluck(:id)
      json.photoUrl url_for(event.photo) if event.photo.attached?
  end
end




# @events.each do |event|
#   json.set! event.id do
#     json.extract! event, :id, :title, :date, :start_time, :end_time, :category_id, :registration_type, :promo_pic, :url
#     json.photoUrl url_for(event.photo) if event.photo.attached?
#      json.organizer do
#         json.extract! event.organizer, :id, :fname, :lname
#     end
#     json.category do
#         json.extract! event.category, :id, :category
#     end
#   end
# end