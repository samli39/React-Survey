const mongoose = require('mongoose');

const { Schema } = mongoose;

// tell mongo what properties will be there
const userSchema = new Schema({
	ID: String,
});

// create collection -users with it's properties
// if already exist, nothing happen
mongoose.model('users', userSchema);
