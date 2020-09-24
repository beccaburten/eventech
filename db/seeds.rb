# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Event.destroy_all

#USERS
demo = User.new({email: 'demo_user@gmail.com', fname: 'Demo', lname: 'User', password: 'demologin'})
gabo = User.new({email: 'gb@gmail.com', fname: 'Gabo', lname: 'Barrio', password: 'gabopw'})
jose = User.new({email: 'jy@gmail.com', fname: 'Jose', lname: 'Yul', password: 'josepw'})
michael = User.new({email: 'mb@gmail.com', fname: 'Michael', lname: 'Burt', password: 'michaelpw'})
rachel = User.new({email: 'rb@gmail.com', fname: 'Rachel', lname: 'Bell', password: 'rachelpw'})
lindsey = User.new({email: 'll@gmail.com', fname: 'Lindsey', lname: 'Lamb', password: 'lindseypw'})
mimi = User.new({email: 'mom@gmail.com', fname: 'Mimi', lname: 'Plutt', password: 'mimipw'})

gabo.save!
jose.save!
michael.save!
rachel.save!
lindsey.save!
mimi.save!
demo.save!

#CATEGORIES

#EVENTS

#POLYMORPHIC -- USER 2 EVENT
