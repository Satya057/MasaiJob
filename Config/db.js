// const mongoose = require("mongoose")
// require("dotenv").config()
// const connection = mongoose.connect(process.env.MONGO_URL)

// module.exports = {
//     connection
// }



const mongoose = require("mongoose");
const connection = () => {
  return mongoose.connect("mongodb+srv://mock13:mock13@cluster0.uyiueap.mongodb.net/test");
};

module.exports = connection;