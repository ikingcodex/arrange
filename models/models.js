var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new mongoose.Schema({
	firstName: {type: String, required: true},
  lastName: {type: String, required: true, lowercase: true},
  username: {type: String, required: true, lowercase: true},
	email: String,
	password: String,
	description: String,
	date_created: Date,
	profile_img: String,
	location: String,
	sex: String,
	groups: [String],
	NoOfGroups:{type: Number, min: 0},
	friends: [String],
	NoOfFriends: {type: Number, min: 0, default:friends.length}
});

var messageSchema = new mongoose.Schema({
	create_date: {type: Date, default: Date.now},
	creator_username: String,
	message_body: String,
	recipient_username: String
})

var groupSchema = new mongoose.Schema({
	name: String,
	create_date: {type: Date, default: Date.now},
	creator_username: String,
	members: [String],
	admin: [String]
})

var group_messageSchema = new mongoose.Schema({
	create_date: {type: Date, default: Date.now},
	creator_username: String,
	message_body: String,
	recipient_id: Schema.Types.ObjectId
})

mongoose.model('User', userSchema);
mongoose.model('Message', messageSchema);
mongoose.model('Group', groupSchema);
mongoose.model('groupM', group_messageSchema);
