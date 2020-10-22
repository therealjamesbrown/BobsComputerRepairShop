/**
 * 
 * ================================
 * ; Title: BCRS PROJECT
 * ; Authors: Sarah Kovar; James Brown; Brendan Mulhern
 * ; Date: 10/14/2020
 * ; Description: Application for Bobs Computer Repair Shop.
 * ================================
 * 
 */

const express = require('express');
const User = require('../models/user')
const router = express.Router();

//bring in our base and error response classes
const BaseResponse = require('../services/base-response');
const ErrorResponse = require('../services/error-response');

/**
 * 
 * --Find All Users--
 * 
 */

 router.get('/', function(req, res) {
    User.find({}, function(err, user) {
        if (err) res.json(err)
        else res.json(user)
    })
 })


/**
 * 
 * --Find User by ID--
 * 
 */



/**
* 
* --CREATE User-- 
* 
*/



/**
* 
* --Update User-- 
* 
*/

/**
 * 
 * --Delete User--
 * 
 */


 module.exports = router; 