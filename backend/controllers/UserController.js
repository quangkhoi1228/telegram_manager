const User = require("../models/UserModel");
const apiResponse = require("../helpers/apiResponse");
var mongoose = require("mongoose");
mongoose.set("useFindAndModify", false);


/**
 * User List.
 * 
 * @returns {Object}
 */
exports.userList = (req, res) => {
	try {
		User.find({}).then((users) => {
			console.log(users)
			if (users.length > 0) {
				return apiResponse.successResponseWithData(res, "Operation success", users);
			} else {
				return apiResponse.successResponseWithData(res, "Operation success", []);
			}
		});
	} catch (err) {
		//throw error in json response with status 500. 
		return apiResponse.ErrorResponse(res, err);
	}
};
