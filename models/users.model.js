const {v4: uuidv4} = require("uuid");

const users = [
  {
    id:uuidv4(),
    username: "polash ahmed",
    email: "polash@email.com"
  },
  {
    id:uuidv4(),
    username: "poran ahmed",
    email: "poran@email.com"
  },
]
module.exports = users