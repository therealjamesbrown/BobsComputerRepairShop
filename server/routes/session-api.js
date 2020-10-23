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

 // Import Base and Error Responses
let ErrorResponse = require('../services/error-response')
let BaseResponse = require('../services/error-response')

 // Import User Schema
 let User = require('../models/user')

 //Sign-in route
 router.post('/signin', async (req,res) => {
     try {
        User.findOne({ "_id": req.params.id }, function(err, user) {
            if (err) {
                const ErrorMessage = new ErrorResponse('500', 'Internal Server Error', err)
                res.json(ErrorMessage)
            } else {
                    bcrypt.compare(req.body.password, user.password, function(err, user) {
                        if (err) {
                            const ErrorMessage = new ErrorResponse('403', 'Passwords did not match', err)
                        } else {
                            const SuccessMessage = new BaseResponse('200', 'Sign In Request Configmed', user)
                            res.json(SuccessMessage)
                        }
                    })
            }
        })
     } catch (e) {
        const ErrorMessage = new ErrorResponse('500', 'Internal Server Error', err)
        res.json(ErrorMessage)
     }
 })

 module.exports = router;