# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Deleting old data"

Gym.destroy_all
Climber.destroy_all
Review.destroy_all

puts "Creating Gym data..."

Gym.create(name: "Flatiron Climbing Gym", location: "Boulder, Colorado")

puts "Creating Climbers..."

Climber.create(name: "Thomas", email: "tlncook85@gmail.com", password: "1985")
Climber.create(name: "James", email: "jac8304@gmail.com", password: "1983")

puts "Creating Review data..."

Review.create(climber_id: Climber.ids.sample, gym_id: 1, content: "This gym is great!")
Review.create(climber_id: Climber.ids.sample, gym_id: 1, content: "Great staff. Loads of fun for all ages.")
Review.create(climber_id: Climber.ids.sample, gym_id: 1, content: "My kids loved it!")
Review.create(climber_id: Climber.ids.sample, gym_id: 1, content: "Lots of great routes.")
Review.create(climber_id: Climber.ids.sample, gym_id: 1, content: "A great date idea, and a good workout.")
Review.create(climber_id: Climber.ids.sample, gym_id: 1, content: "Reasonalbly priced.")
Review.create(climber_id: Climber.ids.sample, gym_id: 1, content: "Tons of routes.")
Review.create(climber_id: Climber.ids.sample, gym_id: 1, content: "First time climber. Will definetly will be back.")
Review.create(climber_id: Climber.ids.sample, gym_id: 1, content: "It's not as easy as it looks, but a lot of fun.")
Review.create(climber_id: Climber.ids.sample, gym_id: 1, content: "The best climbing gym in town, hands down.")
Review.create(climber_id: Climber.ids.sample, gym_id: 1, content: "Always new routes when I come in. it's nice to always try something new.")




puts "Seeding done!"