const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    isEmailVerified: {
      type: Boolean,
      default: false,
    },
    password: {
      type: String,
      required: true,
    },
    authToken: {
      type: String,
    },
    authPurpose: {
      type: String,
    },
  },
  { timestamps: true }
);
const userModel = model("users", userSchema);
module.exports = { userModel };
