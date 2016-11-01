var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new mongoose.Schema({
	firstName: {type: String, required: true},
  lastName: {type: String, required: true, lowercase: true},
  username: {type: String, required: true, lowercase: true},
	email: {type: String, required: true, lowercase: true, unique: true},
	password: {type: String, required: true, lowercase: true},
	description: String,
	date_created: {type: Date, default: Date.now},
	profile_img: String,
	location: String,
	sex: String,
	groups: [String],
	NoOfGroups:{type: Number, min: 0},
	friends: [String],
	NoOfFriends: {type: Number, min: 0}
});

var messageSchema = new mongoose.Schema({
	date_created: {type: Date, default: Date.now},
	creator_username: String,
	message_body: String,
	recipient_username: String
})

var groupSchema = new mongoose.Schema({
	name: String,
	date_created: {type: Date, default: Date.now},
	creator_username: String,
	members: [String],
	admin: [String]
})

var group_messageSchema = new mongoose.Schema({
	date_created: {type: Date, default: Date.now},
	creator_username: String,
	message_body: String,
	recipient_id: Schema.Types.ObjectId
})

mongoose.model('user', userSchema);
mongoose.model('message', messageSchema);
mongoose.model('group', groupSchema);
mongoose.model('groupM', group_messageSchema);
