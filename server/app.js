const express = require('express');
const app = express();
const port = 5000;
var path = require('path');
app.use(express.static(path.join(__dirname, '../uploads')));
const cors = require('cors');
const bodyParser = require('body-parser');
const Message = require('./models/MessagetModel');
const User = require('./models/UserModels');
const Sequelize = require('sequelize');
const sequelize = require('./utils/databse');
const Op = Sequelize.Op;

app.use(
	bodyParser.urlencoded({
		extended: true
	})
);
app.use(bodyParser.json());

var corsOptions = {
	origin: '*',
	optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204.
};

app.use(cors(corsOptions));
const MessageRoute = require('./routes/MessageRoute');
app.use(MessageRoute);
const UserRoute = require('./routes/UserRoute');
const { userInfo } = require('os');
app.use(UserRoute);

sequelize
// .sync({force : true})
	.sync()
	.then((result) => {
		app.listen(port);
	})
	.catch((err) => {
		console.log(err);
	});
