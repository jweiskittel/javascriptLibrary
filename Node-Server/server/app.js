var express = require('express')
var app = express()
var test = require('./controllers/testcontroller')
var sequelize = require('./db')
var bodyParser = require('body-parser')

sequelize.sync()

app.use(bodyParser.json())

app.listen(3000, function() {
    console.log('It works!!')
})

app.use('/api/test', function(req, res){
    res.send('This is data from the /api/test endpoint. It is from the server.')
})

app.use('/test', test)