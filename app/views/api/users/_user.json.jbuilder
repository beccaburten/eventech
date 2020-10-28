json.extract! user, :id, :fname, :lname, :email
json.attendingEvents user.events_attending.pluck(:id)
json.likedEvents user.liked_events.pluck(:id)