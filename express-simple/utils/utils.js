var uuid = require('uuid');


module.exports = {

	/* 
	 * Generate UUID v4
	 */
	uuid_v1 : function () {
		uuid.v4();
	},
}