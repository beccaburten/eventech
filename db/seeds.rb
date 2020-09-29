# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'
# debugger

User.destroy_all
Category.destroy_all
Event.destroy_all

#USERS
demo = User.create({email: 'demo_user@gmail.com', fname: 'Demo', lname: 'User', password: 'demologin'})
gabo = User.create({email: 'bar@gmail.com', fname: 'Gabo', lname: 'Barrio', password: 'gabopw123'})
jose = User.create({email: 'jy@gmail.com', fname: 'Jose', lname: 'Yul', password: 'josepw123'})
michael = User.create({email: 'mb@gmail.com', fname: 'Michael', lname: 'Burt', password: 'michaelpw123'})
rachel = User.create({email: 'rb@gmail.com', fname: 'Rachel', lname: 'Bell', password: 'rachelpw123'})
lindsey = User.create({email: 'll@gmail.com', fname: 'Lindsey', lname: 'Lamb', password: 'lindseypw123'})
mimi = User.create({email: 'mom@gmail.com', fname: 'Mimi', lname: 'Plutt', password: 'mimipw123'})
# mimi.events_attending => return the ids of the events [event objects]


#CATEGORIES
ed = Category.create({category: 'Education'})
net = Category.create({category: 'Career & Networking'})
talk = Category.create({category: 'Tech Talks'})
conf = Category.create({category: 'Virtual Conferences'})
di = Category.create({category: 'Diversity & Inclusion'})

#EVENTS
#starts with Event3
ev1 = Event.create({title: 'App Academy Info Session', organizer_id: gabo.id, 
    date: "2021-09-24", start_time: "2021-09-24 16:00:00-08:00", end_time: "2021-09-24 17:30:00-08:00", 
    category_id: ed.id, company_id: 1, registration_type: 'free', promo_pic: 'n/a', url: 'appacademy.io'})
# ev1.photo.attach(io: File.open("/Users/beccaburten/Desktop/events/aainfo.jpg"), filename: "coders.jpg")
ev1_promo = URI.open("https://eventech-dev.s3-us-west-1.amazonaws.com/event-seeds/aainfo.jpg")
ev1.photo.attach(io: ev1_promo, filename: 'aainfo.jpg')

ev2 = Event.create({title: 'Diversity In Tech Webinar', organizer_id: gabo.id, 
    date: "2021-04-00", start_time: "2021-04-00 10:00:00-08:00", end_time: "2021-04-00 12:30:00-08:00", 
    category_id: di.id, company_id: 1, registration_type: 'RSVP', promo_pic: 'n/a', url: 'diversifytech.co'})
# ev2.photo.attach(io: File.open("/Users/beccaburten/Desktop/events/women.jpg"), filename: "div.jpg")
ev2_promo = URI.open("https://eventech-dev.s3-us-west-1.amazonaws.com/event-seeds/div.jpg")
ev2.photo.attach(io: ev2_promo, filename: "diversityintech.jpg")

ev3 = Event.create({title: 'Walkthrough Of A Coding Technical Interview', organizer_id: lindsey.id, 
    date: "2021-01-01", start_time: "2021-01-01 13:00:00-08:00", end_time: "2021-01-01 14:00:00-08:00", 
    category_id: ed.id, company_id: 1, registration_type: 'free', promo_pic: 'n/a', url: 'youtube.com/watch?v=f02mOEt11OQ'})
# ev3.photo.attach(io: File.open("/Users/beccaburten/Desktop/events/interview.jpg"), filename: "code.jpg")
ev3_promo = URI.open("https://eventech-dev.s3-us-west-1.amazonaws.com/event-seeds/interview.jpg")
ev3.photo.attach(io: ev3_promo, filename: "techinterview.jpg")

ev4 = Event.create({title: 'Virtual Career Fair In Tech', organizer_id: lindsey.id, 
    date: "2021-02-03", start_time: "2021-02-03 09:00:00-08:00", end_time: "2021-02-03 15:00:00-08:00", 
    category_id: net.id, company_id: 1, registration_type: 'free', promo_pic: 'n/a', url: 'quickmeme.com/p/3vojro'})
# ev4.photo.attach(io: File.open("/Users/beccaburten/Desktop/events/career.jpg"), filename: "career.jpg")
ev4_promo = URI.open("https://eventech-dev.s3-us-west-1.amazonaws.com/event-seeds/career.jpg")
ev4.photo.attach(io: ev4_promo, filename: "careerfair.jpg")

ev5 = Event.create({title: 'Charles Babbage: Tech & Time Travel', organizer_id: michael.id, 
    date: "2021-01-09", start_time: "2021-01-09 10:30:00-08:00", end_time: "2021-01-09 12:00:00-08:00", 
    category_id: talk.id, company_id: 1, registration_type: 'RSVP', promo_pic: 'n/a', url: 'britannica.com/biography/Charles-Babbage'})
# ev5.photo.attach(io: File.open("/Users/beccaburten/Desktop/events/babb.jpg"), filename: "type.jpg")
ev5_promo = URI.open("https://eventech-dev.s3-us-west-1.amazonaws.com/event-seeds/babb.jpg")
ev5.photo.attach(io: ev5_promo, filename: "typewriter.jpg")

ev6 = Event.create({title: 'Women In Tech Panel', organizer_id: rachel.id, 
    date: "2021-03-05", start_time: "2021-03-05 10:00:00-08:00", end_time: "2021-03-05 11:30:00-08:00", 
    category_id: di.id, company_id: 1, registration_type: 'RSVP', promo_pic: 'n/a', url: 'women-in-tech.org'})
# ev6.photo.attach(io: File.open("/Users/beccaburten/Desktop/events/div.jpg"), filename: "whoruntheworld.jpg")
ev6_promo = URI.open("https://eventech-dev.s3-us-west-1.amazonaws.com/event-seeds/women.jpg")
ev6.photo.attach(io: ev6_promo, filename: "womenintech.jpg")

ev7 = Event.create({title: 'Asgard TechWeek', organizer_id: mimi.id, 
    date: "2021-03-20", start_time: "2021-03-20 12:00:00-08:00", end_time: "2021-03-24 18:00:00-08:00", 
    category_id: conf.id, company_id: 1, registration_type: 'RSVP', promo_pic: 'n/a', url: 'open.spotify.com/playlist/1xY6msLHX1W34EzB0UkkbU'})
# ev7.photo.attach(io: File.open("/Users/beccaburten/Desktop/events/asgard.jpg"), filename: "thortech.jpg")
ev7_promo = URI.open("https://eventech-dev.s3-us-west-1.amazonaws.com/event-seeds/asgard.jpg")
ev7.photo.attach(io: ev7_promo, filename: "guardians.jpg")
 
ev8 = Event.create({title: 'Why Hiring Bootcamp Grads Improves Your Business', organizer_id: demo.id, 
    date: "2021-04-04", start_time: "2021-04-04 16:00:00-08:00", end_time: "2021-04-04 17:15:00-08:00", 
    category_id: talk.id, company_id: 1, registration_type: 'free', promo_pic: 'n/a', url: 'appacademy.io/immersive/students'})
# ev8.photo.attach(io: File.open("/Users/beccaburten/Desktop/events/bootcampgrad.jpg"), filename: "considerit.jpg")
ev8_promo = URI.open("https://eventech-dev.s3-us-west-1.amazonaws.com/event-seeds/bootcampgrad.jpg")
ev8.photo.attach(io: ev8_promo, filename: "hireme.jpg")
 
ev9 = Event.create({title: 'NYC Digital Conference', organizer_id: demo.id, 
    date: "2021-02-08", start_time: "2021-02-08 09:00:00-08:00", end_time: "2021-02-08 2021-02-10 17:00:00-08:00", 
    category_id: conf.id, company_id: 1, registration_type: 'free', promo_pic: 'n/a', url: 'techupforwomen.com'})
# ev9.photo.attach(io: File.open("/Users/beccaburten/Desktop/events/conference.jpg"), filename: "conference.jpg")
ev9_promo = URI.open("https://eventech-dev.s3-us-west-1.amazonaws.com/event-seeds/conference.jpg")
ev9.photo.attach(io: ev9_promo, filename: "virtualconference.jpg")

ev0 = Event.create({title: 'Junior Dev Social Hour', organizer_id: rachel.id, 
    date: "2021-01-02", start_time: "2021-01-02 19:00:00−08:00", end_time: "2021-01-02 20:00:00−08:00", 
    category_id: net.id, company_id: 1, registration_type: 'RSVP', promo_pic: 'n/a', url: 'codenames.game'})
# ev0.photo.attach(io: File.open("/Users/beccaburten/Desktop/events/social.jpg"), filename: "socialdistance.jpg")
ev0_promo = URI.open("https://eventech-dev.s3-us-west-1.amazonaws.com/event-seeds/social.jpg")
ev0.photo.attach(io: ev0_promo, filename: "eastcoastsocials.jpg")


#REGISTRATIONS
Registration.create({user_id: demo.id, event_id: ev3.id})
Registration.create({user_id: demo.id, event_id: ev5.id})
Registration.create({user_id: demo.id, event_id: ev7.id})
Registration.create({user_id: jose.id, event_id: ev7.id})
Registration.create({user_id: jose.id, event_id: ev3.id})
Registration.create({user_id: lindsey.id, event_id: ev0.id})
Registration.create({user_id: rachel.id, event_id: ev6.id})
Registration.create({user_id: rachel.id, event_id: ev9.id})
Registration.create({user_id: gabo.id, event_id: ev3.id})
