const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const cron = require('node-cron');
const needle = require('needle');
const db = require("./models");

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
    methods: 'GET, PUT, POST, PATCH, DELETE'
};


app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.unsubscribe((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Request-With, Content-Type, Accept, Authoization');
    if(req.method === 'OPTIONS') {
        res.setHeader('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});

app.get('/', (req, res, next) => {
    res.json({
        message: "Welcome to the backend of Voyege application"
    })
});

cron.schedule('0 0 * * *', () => {
    needle.get('http://localhost:3000/api/auth/authentication', function(error, response) {
        if(!error && response.statusCode == 200) {
            console.log("Token Id generated");
        }
    })
    console.log('running a task every day');
});

const Role = db.role;

db.sequelize.sync({force: true}).then(() => {
    console.log("Drop and resync db");
    initial();
})

const initial = () => {
    Role.create({
        roleId: 0,
        name: "user"
    });

    Role.create({
        roleId: 0,
        name: "admin"
    });
}

require('./routes/authenticate.routes')(app);
require('./routes/searchFlight.routes')(app);

module.exports = app;