var express = require('express')
var router = express.Router()
var sequelize = require('../db')
var TestModel = sequelize.import('../models/test') 

router.post('/one', (req, res) => res.send('Test 1 went through!'))

router.get('/one', (req, res) => {
    TestModel.findAll({attributes: ['id', 'testdata']})
    .then(findAllSuccess = data => {
        console.log('Controller data:', data)
        res.json(data)
    },
    findAllError = err => res.send(500, err.message)
    )
})



router.post('/two', (req, res) => {
    let testData = 'Test data for endpoint two'

    TestModel
        .create({
            testdata: testData
        }).then(dataFromDatabase => {
            res.send('Test two went through!')
        })
})

router.post('/three', (req, res) => {
    var testData = req.body.testdata.item
    TestModel.create({testdata: testData})
    res.send('Test three went through!')
    console.log('Test three went through!')
})

router.post('/four', (req, res) => {
    var testData = req.body.testdata.item
    TestModel.create({testdata: testData})
    .then(function message() {res.send('Test 4 went through!')})
})

router.post('/five', (req, res) => {
    var testData = req.body.testdata.item
    TestModel.create({testdata: testData})
    .then(function message(data) {res.send(data)})
})

router.post('/six', (req, res) => {
    var testData = req.body.testdata.item
    TestModel.create({testdata: testData})
    .then(function message(testdata) {
        res.json({testdata: testdata})
    })
})

router.post('/seven', (req, res) => {
    var testData = req.body.testdata.item
    TestModel.create({testdata: testData})
    .then(function createSuccess(testdata) {
        res.json({testdata: testdata})
    },
    function createError(err) {
        res.send(500, err.message)
    }
    )
})

router.get('/helloclient', (req, res) => res.send('This is a message from the server to the client.'))

module.exports = router