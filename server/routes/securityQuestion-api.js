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
const SecurityQuestion = require('../models/securityQuestion');
const router = express.Router();

//bring in our base and error response classes
const BaseResponse = require('../services/base-response');
const ErrorResponse = require('../services/error-response');

/**
 * 
 * --Find All securityQuestions--
 * 
 */



/**
 * 
 * --Find securityQuestion by ID--
 * 
 */
router.get('/:_id', async(req, res) => {
    try{
        SecurityQuestion.findOne({
            '_id': req.params._id
        },
        function(err, securityQuestion){
            if(err){
                console.log(err);
                const findSecurityQuestionMongoDbError = new ErrorResponse('500', 'Internal Server Error!', err);
                res.status(500).send(findSecurityQuestionMongoDbError.toObject());
            } else {
                console.log(securityQuestion);
                const findSecurityQuestionMongoDbSuccess = new BaseResponse('200', 'Success!', securityQuestion);
                res.json(findSecurityQuestionMongoDbSuccess.toObject());
            }
        })
    } catch (e){
        console.log(e);
        const findSecurityQuestionCatchError = new ErrorResponse('500', 'Internal Server Error!', e.message);
        res.status(500).send(findSecurityQuestionCatchError.toObject());
    }
})

/**
* 
* --CREATE securityQuestion-- 
* 
*/



/**
* 
* --Update securityQuestion-- 
* 
*/

/**
 * 
 * --Delete securityQuestion--
 * 
 */



module.exports = router; 