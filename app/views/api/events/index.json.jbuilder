@events.each do |event|
  json.set! event.id do
      json.extract! event, :id, :title, :date, :start_time, :end_date, :end_time, :category_id, :organizer_id, :description
      json.attendees event.attendees.pluck(:id)
      json.photoUrl url_for(event.photo) if event.photo.attached?
  end
end
