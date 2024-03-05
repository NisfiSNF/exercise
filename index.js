const { User } = require('./models')

const user = new User;
user.name = "Jejen"
user.email = "jeje69@gmail.com"
user.country = "kuwait"
user.password = "Suje113"

user.save().then(() => console.log("User info saved"))