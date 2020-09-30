json.extract! user, :id, :fname, :lname, :email
json.attendingEvents user.events_attending.pluck(:id)