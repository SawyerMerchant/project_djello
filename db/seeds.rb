# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

USER_COUNT = 10
BOARD_COUNT = 3

if Rails.env == "development"
  puts "Deleting Boards"
  Board.destroy_all
  puts "Deleting Users"
  User.destroy_all
end

puts "Creating Users"
USER_COUNT.times do
  User.create(
    email: Faker::Internet.unique.email,
    password: "password"
  )
end
p User.all

puts "Creating Boards"
users = User.all
users.each do |user|
  BOARD_COUNT.times do
    user.boards.create(
      title: Faker::Hacker.unique.say_something_smart
    )
  end
end
