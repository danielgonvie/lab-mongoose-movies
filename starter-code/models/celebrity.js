const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Celebrity = new Schema(
  {
    name: String,
    occupation: String,
    catchPhrase: String

  }
)

const Celebrities = mongoose.model("Celebrity", Celebrity);
module.exports = Celebrities;