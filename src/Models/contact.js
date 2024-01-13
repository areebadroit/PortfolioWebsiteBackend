import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  emailId: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: String,
  },
  message: {
    type: String,
  },
});

const Contact = mongoose.model("Contact", contactSchema);

export default Contact;
