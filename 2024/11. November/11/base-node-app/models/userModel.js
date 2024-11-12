const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fName: {
    type: String,
    required: true,
  },
  lName: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /.+\@.+\..+/,
  },
  password: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (v) {
        const re = /^\d{10}$/;
        return !v || !v.trim().length || re.test(v);
      },
      message: "Provided password is invalid.",
    },
  },

  role: {
    type: String,
    enum: ["Admin", "Member"],
    default: "Member",
  },
});

userSchema.virtual("fullName").get(function () {
  return `${this.fName} ${this.lName} `;
});

const userModel = mongoose.model("User", userSchema);
module.exports = { userModel };
