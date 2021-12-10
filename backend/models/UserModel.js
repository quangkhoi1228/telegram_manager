var mongoose = require("mongoose");

var UserSchema = new mongoose.Schema({
	api_hash: { type: String, required: true },
	api_id: { type: String, required: true },
	phone: { type: String, required: true },
}, { timestamps: true });


module.exports = mongoose.model("User", UserSchema);