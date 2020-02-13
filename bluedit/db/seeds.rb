# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
user = User.create(username: "Sam", email:"raeweinst@gmail.com", password_digest: "$2a$12$3tNvk9ZDY6Xj5GvQqs7XOe2HBvkWpSILirPWoefiTw0hJe2CnRNNa")
post = Post.create(title:"Ayy Lmao", text: "👽👽👽 bruh moment!!!!!!!!!", image_url:"https://www.redditstatic.com/icon.png", user:user)
