const Sequelize = require('sequelize');
const sequelize = require('../utils/databse');

const Message = sequelize.define('message', {
	id: {
		type: Sequelize.INTEGER(11),
		autoIncrement: true,
		allowNull: false,
		primaryKey: true
	},
	Owner: {
		type: Sequelize.STRING,
		allowNull: false
	},
	Receiver: {
		type: Sequelize.STRING,
		allowNull: false
	},
	Subject: {
		type: Sequelize.STRING,
		allowNull: false
	},
	Message: {
		type: Sequelize.STRING,
		allowNull: false
	}
});
module.exports = Message;
