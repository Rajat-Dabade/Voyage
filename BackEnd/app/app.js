const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const cron = require('node-cron');
const db = require("./models");
const fetch = require('node-fetch');
const schedule = require('node-schedule');

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

schedule.scheduleJob('0 0 * * *', () => {
    fetch('http://localhost:3000/api/auth/authentication')
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })
});

const Role = db.role;

db.sequelize.sync({force: false}).then(() => {
    console.log("Drop and resync db");
    // initial();
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
require('./routes/flight/searchFlight.routes')(app);
require('./routes/auth.routes')(app);
require('./routes/admin/admin.routes')(app);
require('./routes/flight/fareRule.routes')(app);
require('./routes/flight/fareQoute.routes')(app);
require('./routes/flight/ssr.routes')(app);
require('./routes/flight/book.routes')(app);
require('./routes/flight/ticket.routes')(app);
require('./routes/flight/cancellation/releasePnrRequest.routes')(app);
require('./routes/flight/cancellation/sendChangeRequest.routes')(app);
require('./routes/flight/cancellation/getChangeRequestStatus.routes')(app);
require('./routes/flight/cancellation/cancellationCharges.routes')(app);

module.exports = app;