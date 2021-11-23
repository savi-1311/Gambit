const { model, Schema } = require('mongoose');

// Schema for individual scores
const scoreSchema = new Schema({
  username: String,
  wins: { type: Number, default: 0 },
  loss: { type: Number, default: 0 },
  draw: { type: Number, default: 0 }
});

module.exports = model('Score', scoreSchema, 'scores');
