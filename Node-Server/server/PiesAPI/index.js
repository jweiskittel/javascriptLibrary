require('dotenv').config()
const express = require('express')
const app = express()
const sequelize = require('./db')
const pie = require('./controllers/piecontroller')
const user = require('./controllers/usercontroller')
const bodyParser = require('body-parser')

sequelize.sync()

app.use(bodyParser.json())
app.use(require('./middleware/headers'))

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => res.render('index'))

app.use('/pies', pie)
app.use('/auth', user)

app.listen(process.env.PORT, () => console.log(`App is listening on ${process.env.PORT}.`))