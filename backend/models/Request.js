const mongoose = require("mongoose")

const RequestSchema = new mongoose.Schema({

  user: String,
  item: String,
  price: Number,
  status: { type: String, default: "new" }

})

module.exports = mongoose.model("Request", RequestSchema)