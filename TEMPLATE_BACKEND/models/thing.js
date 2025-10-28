const mongoose = require('mongoose');

const thingSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  description: { type: String, required: true, trim: true },
  imageUrl: { type: String, required: true, trim: true },
  userId: { type: String, required: true, trim: true },
  price: { type: Number, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Thing', thingSchema);
