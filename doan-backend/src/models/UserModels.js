
import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    avatar:{
        type: String,
        required: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
        type: Number,
        required: true,
    }
    ,
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
    accses_token:{
        type: String,
        require:true
    },
    refresh_token:{
        tyoe:String,
        require: true
    }
  },
  {
    timestamps: true,
  }
);

// Login
userSchema.methods.matchPassword = async function (enterPassword) {
  return await bcrypt.compare(enterPassword, this.password);
};

// Register
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("User", userSchema);

export default User;

