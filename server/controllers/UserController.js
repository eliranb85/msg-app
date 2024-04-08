const con = require('../utils/databse');
const User = require('../models/UserModels');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const SendMessage = require('../utils/returnObToClient');

exports.findManagerByUserName = async (req, res, next) => {
	let name = req.query.name;
	let adress = req.query.adress;
	let cid = req.query.cid;
	let flour= req.query.flour;
	let phone= req.query.phone;
	let costumer_note=req.query.costumer_note;
	let id = req.query.id;

	await User.findAll({
		where: {
			id:{
				[Op.like]: `%${id}`
			},
			adress: {
				[Op.like]: `%${adress}`
			},
			cid:{
                 [Op.like]:`%${cid}`
			},
			name: {
				[Op.like]: `%${name}`
			}
		}
	})
		.then((User) => {
			res.send(SendMessage(User, null, 1));
		})
		.catch((err) => {
			res.send(SendMessage(null, err, 0));
		});
};

exports.insertUser = async (req, res, next) => {
	let user = req.body;

	await User.create(user)
		.then((User) => {
			res.send(SendMessage(User, null, 1));
		})
		.catch((err) => {
			res.send(SendMessage(null, err, 0));
		});
};

exports.getAllUser = async (req, res, next) => {
	await User.findAll()
		.then((User) => {
			res.send(SendMessage(User, null, 1));
		})
		.catch((err) => {
			res.send(SendMessage(null, err, 0));
		});
};

exports.findUserByName = async (req, res, next) => {
	let name = req.query.name;
	await User.findAll({
		where: {
			name: {
				[Op.like]: `%${name}`
			}
		}
	})
		.then((User) => {
			res.send(SendMessage(User, null, 1));
		})
		.catch((err) => {
			res.send(SendMessage(null, err, 0));
		});
};