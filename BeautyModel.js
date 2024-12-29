const mongoose = require("mongoose");

const beautySchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  comment: { type: String, required: true },
});

const Message = mongoose.model("BeautyMessages", beautySchema);

module.exports = Message;
