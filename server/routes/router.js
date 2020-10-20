let express = require('express')
let router = express.Router()
let cors = require('cors')
let bodyParser = require('body-parser')
let Catalog = require('../models/catalog')

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: false }))
router.use(cors())

router.get('/', function(req, res) {
        res.send("Router works")
})

module.exports = router