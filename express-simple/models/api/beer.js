var mongoose = require('mongoose');

var Schema = mongoose.Schema;

// create beer schema
var beerSchema = new Schema({
	acctId: {type: String, required: true, index: {unique: true}},
	name: {type: String, required: true, index: {unique: true}},
	content: String,
	price: {type: Number, required: true},
	country: {type: String, required: true},
	type: {type: String, required: true},
	created: {type: Date, default: Date.now},
	update: {type: Date, default: Date.now},
	active: {type: Boolean, default: true}
});


// export
module.exports = mongoose.model('Beer', beerSchema);