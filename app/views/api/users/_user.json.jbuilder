json.extract! user, :id, :email
json.attendingEvents user.events_attending.pluck(:id)