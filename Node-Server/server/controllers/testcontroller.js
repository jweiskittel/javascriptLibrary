var express = require('express')
var router = express.Router()
var sequelize = require('../db')
var TestModel = sequelize.import('../models/test') 

router.post('/one', (req, res) => res.send('Test 1 went through!'))

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
    TestModel.create({
        testdata: testData
    })
    res.send('Test three went through!')
    console.log('Test three went through!')
})

module.exports = router