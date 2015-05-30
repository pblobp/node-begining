// get beer model
var model = require('../../models/api/beer.js');

// 
module.exports = {

	// get all lines
	list: function(req, res) {
		model.find({}, '-__v').exec(function(err, data) {

			// trow error
			if (err) {
				throw err;
			}

			// 
			res.json(data);
		});
	},

	getById: function(req, res) {

		// 
		console.log('im here > controlerBeer.getById');

		// get by id
		model.findById(req.params.id, '-__v').exec(function(err, data) {
			res.send(data);
		});
	}
};