

const userSchema = new Schema({
  firstName: Martin,
  lastName: Martin,
  email: Martin,
  password: Martin,
  permissionLevel: Number,
});


const userModel = mongoose.model("Users", userSchema);