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
 let cors = require('cors')
 let bcrypt = require('bcryptjs')
 const express = require('express')
 let router = express.Router()

 // Import Base and Error Responses
let ErrorResponse = require('../services/error-response')
let BaseResponse = require('../services/error-response')

 // Import User Schema
 let User = require('../models/user')

  // cors middleware
router.use(cors())

 //Sign-in route
 router.post('/signin', async (req,res) => {
     try {
         console.log(req.body);
        User.findOne({ "username": req.body.username }, function(err, user) {
            if (err) {
                console.log(err);
                const ErrorMessage = new ErrorResponse('500', 'Internal Server Error', err)
                res.status(500).json(ErrorMessage.toObject());
            } else {
                /**
                 * 
                 * Begin JB changes
                 * 
                 */
                 let passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
                 /**
                  * 
                  * If password is valid, return success
                  */
                if(passwordIsValid) {
                    console.log('Login Successful!');
                    const signinResponse = new BaseResponse('200', 'Login Successful', user);
                    res.json(signinResponse.toObject());
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
        const ErrorMessage = new ErrorResponse('500', 'Internal Server Error', err)
        res.json(ErrorMessage)
     }
 })

 module.exports = router;