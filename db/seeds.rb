# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

USER_COUNT = 10
ITEM_COUNT = 3


if Rails.env == "development"
  # puts "Deleting Lists"
  # List.destroy_all
  # puts "Deleting Boards"
  # Board.destroy_all
  # puts "Deleting Users"
  # User.destroy_all
  puts "Reset Database"
  Rake::Task['db:migrate:reset'].invoke
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
  ITEM_COUNT.times do
    user.ownedboards.create(
      title: Faker::Hipster.unique.words(3).join(" ")
    )
  end
end

puts "Creating Lists"
boards = Board.all
boards.each do |board|
  ITEM_COUNT.times do
    board.lists.create(
      title: Faker::Hipster.unique.words(3).join(" "),
      description: Faker::Hipster.words(5).join(" ")
    )
  end
end

puts "Creating Cards"
lists = List.all
lists.each do |list|
  ITEM_COUNT.times do
    list.cards.create(
      title: Faker::Hipster.unique.words(3).join(" "),
      description: Faker::Hipster.words(5).join(" ")
    )
  end
end

puts "Adding Users to Boards"
boards.each do |board|
  users = User.all
  ITEM_COUNT.times do
    board.users << users.shuffle.pop
  end
end
