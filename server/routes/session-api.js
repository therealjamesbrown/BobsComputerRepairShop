/**
 * 
 * ================================
 * ; Title: Session-API
 * ; Authors: Sarah Kovar; James Brown; Brendan Mulhern
 * ; Date: 10/23/2020
 * ; Description: Application for Bobs Computer Repair Shop.
 * ================================
 * 
 */


 // Install dependencies
 let bcrypt = require('bcryptjs')
 const express = require('express')
 let router = express.Router()
 let saltRounds = 10

 // Import Base and Error Responses
let ErrorResponse = require('../services/error-response')
let BaseResponse = require('../services/error-response')

 // Import User Schema
 let User = require('../models/user')


 //Sign-in route
 router.post('/signin', async (req,res) => {
     try {
        User.findOne({ 'username': req.body.username }, function(err, user) {
            if (err) {
                const singinMongoDbErrorMessage = new ErrorResponse('500', 'Internal Server Error', err) //**this should be 'signin' */
                res.status(500).json(singinMongoDbErrorMessage.toObject());  //**this should be 'signin' */
            } 


           
            /**
                 * 
                 * Begin JB changes
                 * 
                 */

                 //check if the user doesn't exist bc compareSync doesn't like null values.
            else if(!user){
                console.log('no user exists');
                const invalidUserNameResponse = new BaseResponse('200', 'Invalid username and/or password, please try again.', null);
                res.status(401).send(invalidUserNameResponse.toObject());
            }
            else {
                
                 let passwordIsValid = bcrypt.compareSync(req.body.password, user.password);

                 /**
                  * 
                  * If password is valid, return success
                  */
                if(passwordIsValid) {
                        if (user.isDisabled == true) {
                            user.set({
                                isDisabled: false,
                            })
                            user.save()
                            const signinResponse = new BaseResponse('200', 'Re-enabled and logged in', user);
                            res.json(signinResponse.toObject());
                        } else {
                            console.log('Login Successful!');
                            const signinResponse = new BaseResponse('200', 'Login Successful', user);
                            res.json(signinResponse.toObject());
                        }
                }

                /**
                 * If pass is invalid, return invalid password message
                 */
                else {
                    console.log(`Username: ${req.body.username} is invalid.`);
                    const invalidUserNameResponse = new BaseResponse('200', 'Invalid username and/or password, please try again.', null);
                    res.status(401).send(invalidUserNameResponse.toObject());
                }
            }
        })
     } catch (e) {
         console.log("this error fired")
        const ErrorMessage = new ErrorResponse('500', 'Internal Server Error', err.message)
        res.status(500).json(ErrorMessage.toObject())
     }
 })

 // Password Reset Route
 router.put('/users/:username/reset-password', function(req, res) {
    // Find a user by username
    User.findOne({ "username": req.params.username }, function(err, user) {
        if (err) {
            const ErrorMessage = new ErrorResponse('500', 'Internal Server Error', err)
            res.status(500).json(ErrorMessage.toObject())
        } else {
            // Hash the new password
            let hashedPassword = bcrypt.hashSync(req.body.password, saltRounds)
                     // Update the Password
            user.set({
                        password: hashedPassword
                    })
            user.save(function(err, user) {
                        if (err) {
                            const ErrorMessage = new ErrorResponse('500', 'Internal Server Error', err)
                            res.status(500).json(ErrorMessage.toObject())
                        } else {
                            const SuccessMessage = new BaseResponse('200', 'PUT Request Success', user)
                            res.status(200).json(SuccessMessage.toObject())
                        }
            })
        }
    })
 })

 module.exports = router;