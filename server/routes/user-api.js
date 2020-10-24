/**
 * 
 * ================================
 * ; Title: user-api.js
 * ; Authors: Sarah Kovar; James Brown; Brendan Mulhern
 * ; Date: 10/14/2020
 * ; Description: API that handles CRUD operations for users
 * ================================
 * 
 */

const express = require('express');
const User = require('../models/user');
const router = express.Router();
var bcrypt = require('bcryptjs');

//bring in our base and error response classes
const BaseResponse = require('../services/base-response');
const ErrorResponse = require('../services/error-response');
//const { try } = require('bluebird'); //SK commented this out 10/22/20 at 10pm; no idea why this is here - I think it populates when you type 'try'
const saltRounds = 10; //set the number of times the password is getting salted

/**
 * 
 * --Find All Users--
 * 
 */

 router.get('/', function(req, res) {
try {
    User.find({}, function(err, user) {
        if (err) { 
            const ErrorMessage = new ErrorResponse('500', 'Internal Server Erorr', err)
            res.json(ErrorMessage) 
        } else { 
            const SuccessMessage = new BaseResponse('200', 'GET Request Success', user)
            res.json(SuccessMessage) }
    })} catch (e) {
        const ErrorMessage = new ErrorResponse('500', 'Internal Server Erorr', err)
        res.json(ErrorMessage)
    }
 })


/**
 * 
 * --Find User by ID--
 * Created by SK
 */
router.get('/:id', async(req, res) => {
    try {
      User.findOne({'_id': req.params.id}, function(err, user) {
  
        console.log(req.params.id)
  
        if (err) {
          console.log(err);
  
          const mongoDbErrorResponse = new ErrorResponse ('500', 'Internal server error', err);
  
          res.status(500).send(mongoDbErrorResponse.toObject());
        } else {
  
          console.log(user);
          res.json(user);
        }
      })
    } catch (e) {
      console.log(e);
  
      const errorCatchResponse = new ErrorResponse('500', 'Internal server error', err)
      res.status(500).send(errorCatchResponse.toObject());
    }
  });


/**
* 
* --CREATE User-- 
* 
*/
router.post('/', async(req, res) => {
    try{
        let hashedPassword = bcrypt.hashSync(req.body.password, saltRounds); //salt that thang

        let newUser = {
            username:    req.body.username,
            password:    hashedPassword,
            firstName:   req.body.firstName,
            lastName:    req.body.lastName,
            phoneNumber: req.body.phoneNumber,
            address:     req.body.address,
            email:       req.body.email
        }

        User.create(newUser, function(err, user){
            if(err){
                console.log(err);
                const createUserMongoDbErrorResponse = new ErrorResponse('500', 'Internal Server Error!', err);
                res.status(500).send(createUserMongoDbErrorResponse.toObject());
            } else {
                console.log(user);
                const createUserSuccessResponse = new BaseResponse('200', 'Success!', user);
                res.json(createUserSuccessResponse.toObject());
            }
        })
    } catch(e){
        console.log(e);
        const createUserCatchErrorResponse = new ErrorResponse('500', 'Internal Server Error', e.message);
        res.status(500).send(createUserCatchErrorResponse.toObject());
    }
});


/**
* 
* --Update User-- 
* 
*/

router.put('/:id', async(req, res) => {
    try {
        User.findOne({'_id': req.params.id}, function(err, user){
            if (err) {
                console.log(err);
                const updateUserMongoDbErrorResponse = new ErrorResponse('500', 'Internal Server Error', err);
                res.status(500).send(updateUserMongoDbErrorResponse.toObject());
            } else {
                console.log(user);

                user.set({
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    phoneNumber: req.body.phoneNumber,
                    address: req.body.address,
                    email: req.body.email
                });

                user.save(function(err, savedUser) {
                    if(err) {
                        console.log(err);
                        const saveUserMongoDbErrorResponse = new ErrorResponse('500', 'Internal Server Error!', err);
                        res.status(500).send(saveUserMongoDbErrorResponse.toObject());
                    } else {
                        console.log(savedUser);
                        const saveUserSuccessResponse = new BaseResponse('200', 'Success!', savedUser);
                        res.json(saveUserSuccessResponse.toObject());
                    }
                })
            }
        })
    } catch (e) {
        console.log(e);
        const updateUserCatchErrorResponse = new ErrorResponse('500', 'Internal Server Error!', e.message);
        res.status(500).send(updateUserCatchErrorResponse.toObject());
    }
})
"5f91c55c199335fb0f957056"


/**
 * 
 * --Delete User--
 * 
 */
router.delete('/:id', function(req, res) {
try {
    User.findOne({ "_id": req.params.id }, function(err, user) {
        if (err) { 
            const ErrorMessage = new ErrorResponse('500', 'Internal Server Erorr', err)
            console.log(ErrorMessage)
        } else {
            user.remove(function() {
            const SuccessMessage = new BaseResponse('200', 'DELETE Request Success', user)
            res.json(SuccessMessage)
    })}})} catch (e) {
            const ErrorMessage = new ErrorResponse('500', 'Internal Server Erorr', err)
            res.json(ErrorMessage)
    }   
})

 module.exports = router; 