require('dotenv').config()
var express = require('express')
var app = express()
var authTest = require('./controllers/authtestcontroller')
var test = require('./controllers/testcontroller')
var user = require('./controllers/usercontroller')
var sequelize = require('./db')
var bodyParser = require('body-parser')

sequelize.sync()
app.use(bodyParser.json())
app.use(require('./middleware/headers'))

app.use('/api/user', user)
app.use('/test', test)

app.use(require('./middleware/validate-session'))
app.use('/authtest', authTest)

app.listen(3000, function() {
    console.log('App is listening on 3000')
})