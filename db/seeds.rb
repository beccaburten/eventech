# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'
#  

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
ev1 = Event.create({title: 'App Academy Info Session', organizer_id: gabo.id, 
    date: "2021-09-24", start_time: "2021-09-24 16:00:00-08:00", end_date: "2021-09-24", end_time: "2021-09-24 17:30:00-08:00", 
    category_id: ed.id, company_id: 1, registration_type: 'free', promo_pic: 'n/a', url: 'appacademy.io', description: "The application, and admissions process has a few different steps for you to complete before joining us. App Academy is looking for students ready to study hard and ultimately become Full Stack Software Engineers. We have a team to support you from getting into App Academy to getting your first job!"})
ev1_promo = URI.open("https://eventech-dev.s3-us-west-1.amazonaws.com/event-seeds/aainfo.jpg")
ev1.photo.attach(io: ev1_promo, filename: 'aainfo.jpg')

ev2 = Event.create({title: 'Diversity In Tech Webinar', organizer_id: gabo.id, 
    date: "2021-04-01", start_time: "2021-04-01 10:00:00-08:00", end_date: "2021-04-01", end_time: "2021-04-01 12:30:00-08:00", 
    category_id: di.id, company_id: 1, registration_type: 'RSVP', promo_pic: 'n/a', url: 'diversifytech.co', description: "As a part of our ongoing spotlight around diversity and inclusion, join us for an evening of conversation around the issues and obstacles we face as womxn, BIPOC, & LGBTQ people in this new tech industry landscape. This month we will be highlighting the unique experience and contributions of Black Women in STEM."})
ev2_promo = URI.open("https://eventech-dev.s3-us-west-1.amazonaws.com/event-seeds/diversityintech.jpg")
ev2.photo.attach(io: ev2_promo, filename: "diversityintech.jpg")

ev3 = Event.create({title: 'Walkthrough Of A Coding Technical Interview', organizer_id: lindsey.id, 
    date: "2021-01-01", start_time: "2021-01-01 13:00:00-08:00", end_date: "2021-01-01", end_time: "2021-01-01 14:00:00-08:00", 
    category_id: ed.id, company_id: 1, registration_type: 'free', promo_pic: 'n/a', url: 'youtube.com/watch?v=f02mOEt11OQ', description: "Various new fields are surfacing in the area of programming and web development. The demand for problem solvers in the programming field is on the rise due to the ever-increasing application of programs. The advance problem-solving course helps change the approach to problems in general, as well as boost algorithmic thinking, helpful in solving real programming issues."})
ev3_promo = URI.open("https://eventech-dev.s3-us-west-1.amazonaws.com/event-seeds/interview.jpg")
ev3.photo.attach(io: ev3_promo, filename: "techinterview.jpg")

ev4 = Event.create({title: 'Virtual Career Fair In Tech', organizer_id: lindsey.id, 
    date: "2021-02-03", start_time: "2021-02-03 09:00:00-08:00", end_date: "2021-02-03", end_time: "2021-02-03 15:00:00-08:00", 
    category_id: net.id, company_id: 1, registration_type: 'free', promo_pic: 'n/a', url: 'quickmeme.com/p/3vojro', description: "If you’ve ever been to one of our in-person events and experienced our vibrant community, then you already know that this is going to be a great job fair – even when hosted online. You’ll meet recruiting professionals from all the top tech companies of your dreams, and we continue to add new hiring companies right up and until the event."})
ev4_promo = URI.open("https://eventech-dev.s3-us-west-1.amazonaws.com/event-seeds/career.jpg")
ev4.photo.attach(io: ev4_promo, filename: "careerfair.jpg")

ev5 = Event.create({title: 'Charles Babbage: Tech & Time Travel', organizer_id: michael.id, 
    date: "2021-01-09", start_time: "2021-01-09 10:30:00-08:00", end_date: "2021-01-09", end_time: "2021-01-09 12:00:00-08:00", 
    category_id: talk.id, company_id: 1, registration_type: 'RSVP', promo_pic: 'n/a', url: 'britannica.com/biography/Charles-Babbage', description: "A technical talk and workshop series created to empower the burgeoning developer and technological community to grow and gain access to world-class speakers and developers. Become a tech time traveler in your own right as Mr. Babbage shares his expertise, insights, and stories."})
ev5_promo = URI.open("https://eventech-dev.s3-us-west-1.amazonaws.com/event-seeds/babb.jpg")
ev5.photo.attach(io: ev5_promo, filename: "typewriter.jpg")

ev6 = Event.create({title: 'Women In Tech Panel', organizer_id: rachel.id, 
    date: "2021-03-05", start_time: "2021-03-05 10:00:00-08:00", end_date: "2021-03-05", end_time: "2021-03-05 11:30:00-08:00", 
    category_id: di.id, company_id: 1, registration_type: 'RSVP', promo_pic: 'n/a', url: 'women-in-tech.org', description: "The world needs more women in tech, now more than ever in our increasingly digital world! Join us in this online talk where we will cover the root of gender inequality and why closing the gender gap should be a priority for all."})
ev6_promo = URI.open("https://eventech-dev.s3-us-west-1.amazonaws.com/event-seeds/women.jpg")
ev6.photo.attach(io: ev6_promo, filename: "womenintech.jpg")

ev7 = Event.create({title: 'Asgard TechWeek', organizer_id: mimi.id, 
    date: "2021-03-20", start_time: "2021-03-20 12:00:00-08:00", end_date: "2021-03-24", end_time: "2021-03-24 18:00:00-08:00", 
    category_id: conf.id, company_id: 1, registration_type: 'RSVP', promo_pic: 'n/a', url: 'open.spotify.com/playlist/1xY6msLHX1W34EzB0UkkbU', description: "Asgard brings together hundreds of entrepreneurs, pioneers, and creatives under one roof to address humanity’s greatest challenges via space technology. The summit also serves to bring key stakeholders that will accelerate bringing both the exploration and the expansion of space to mainstream audiences."})
ev7_promo = URI.open("https://eventech-dev.s3-us-west-1.amazonaws.com/event-seeds/asgard.jpg")
ev7.photo.attach(io: ev7_promo, filename: "guardians.jpg")
 
ev8 = Event.create({title: 'Why Hiring Bootcamp Grads Improves Your Business', organizer_id: demo.id, 
    date: "2021-04-04", start_time: "2021-04-04 16:00:00-08:00", end_date: "2021-04-04", end_time: "2021-04-04 17:15:00-08:00", 
    category_id: talk.id, company_id: 1, registration_type: 'free', promo_pic: 'n/a', url: 'appacademy.io/immersive/students', description: "App Academy's 3% admissions rate makes them the most selective bootcamp- selecting only the highest caliber of students through a rigorous screening process. The unique selection process and effective student targeting provides a diverse student cohort with a curriculum developed based on the skills companies are looking for in software engineers."})
ev8_promo = URI.open("https://eventech-dev.s3-us-west-1.amazonaws.com/event-seeds/bootcampgrad.jpg")
ev8.photo.attach(io: ev8_promo, filename: "hireme.jpg")
 
ev9 = Event.create({title: 'NYC Digital Conference', organizer_id: demo.id, 
    date: "2021-02-08", start_time: "2021-02-08 09:00:00-08:00", end_date: "2021-02-08", end_time: "2021-02-08 2021-02-10 17:00:00-08:00", 
    category_id: conf.id, company_id: 1, registration_type: 'free', promo_pic: 'n/a', url: 'techupforwomen.com'})
ev9_promo = URI.open("https://eventech-dev.s3-us-west-1.amazonaws.com/event-seeds/conference.jpg")
ev9.photo.attach(io: ev9_promo, filename: "virtualconference.jpg")

ev0 = Event.create({title: 'Junior Dev Social Hour', organizer_id: rachel.id, 
    date: "2021-01-02", start_time: "2021-01-02 19:00:00−08:00", end_date: "2021-01-02", end_time: "2021-01-02 20:00:00−08:00", 
    category_id: net.id, company_id: 1, registration_type: 'RSVP', promo_pic: 'n/a', url: 'codenames.game', description: "The Junior Dev Happy Hour is AMA style, so ask us about job search tips, which technologies we are currently learning, networking, you name it. Based on our survey results, we do plan on recording this talk and posting to YouTube for those who can't attend. Please don't enable video if that makes you uncomfortable."})
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
