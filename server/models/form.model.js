const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const formSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phone: { type: String, required: true },
  email: [String],
  street: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zip: { type: String, required: true },
}, {
  timestamps: true,
});

const Form = mongoose.model('Form', formSchema);

module.exports = Form;