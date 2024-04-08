const con = require('../utils/databse');
const Message = require('../models/MessagetModel');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const SendMessage = require('../utils/returnObToClient');

exports.getMessage = async (req, res, next) => {
	await Message.findAll()
		.then((Message) => {
			res.send(SendMessage(Message, null, 1));
		})
		.catch((err) => {
			res.send(SendMessage(null, err, 0));
		});
};

exports.insertMessage = async (req, res, next) => {
	let message = req.body;
	await Message.create(message)
		.then((Message) => {
			res.send(SendMessage(Message, null, 1));
		})
		.catch((err) => {
			res.send(SendMessage(null, err, 0));
		});
};
exports.findSentMassage=async (req, res,next) => {
	let name=req.query.name
	await Message.findAll({
		where: {
			Owner: name
		}
	})
		.then((Message) => {
			res.send(SendMessage(Message, null, 1));
		})
		.catch((err) => {
			res.send(SendMessage(null, err, 0));
		});

}
exports.findIncomeMassage=async (req, res,next) => {
	let name=req.query.name
	await Message.findAll({
		where: {
			Receiver: name
		}
	})
		.then((Message) => {
			res.send(SendMessage(Message, null, 1));
		})
		.catch((err) => {
			res.send(SendMessage(null, err, 0));
		});

}
exports.deleteMessage = async (req, res, next) => {
	let id = req.query.id;

	await Message.destroy({
		where: {
			id: id
		}
	})
		.then((Message) => {
			res.send(SendMessage(Message, null, 1));
		})
		.catch((err) => {
			res.send(SendMessage(null, err, 0));
		});
};
