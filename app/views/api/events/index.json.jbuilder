@events.each do |event|
  json.set! event.id do
    json.extract! event, :id, :title, :date, :start_time, :end_time, :category_id, :registration_type, :promo_pic, :url
  end
end