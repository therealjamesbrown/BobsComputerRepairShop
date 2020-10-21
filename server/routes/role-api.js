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
const { isValidObjectId } = require('mongoose');
const Role = require('../models/roles');
const router = express.Router();

//bring in our base and error response classes
const BaseResponse = require('../services/base-response');
const ErrorResponse = require('../services/error-response');

/**
 * 
 * --Find All Roles--
 * 
 */



/**
 * 
 * --Find Role by ID--
 * 
 */



/**
* 
* --CREATE Role-- 
* 
*/
router.post('/', async(req, res) => {
    try{
        //if it doesn't insert the new object
        const newRole = {
            text: req.body.text,
            isDisabled: req.body.isDisabled
        }
        Role.create(newRole, function(err, createdRole){
            if(err){
                console.log(err);
                const createRoleErrorResponse = new ErrorResponse('500', 'Internal Server Error', err);
                res.status(500).send(createRoleErrorResponse.toObject());
            } else {
                console.log(createdRole);
                const createRoleSuccessResponse = new BaseResponse('200', 'Success!', createdRole);
                res.json(createRoleSuccessResponse.toObject());
            }
        });
} catch (e) {
    console.log(e);
    const createRoleCatchErrorResponse = new ErrorResponse('500', 'Internal Server Error!', e.message);
    res.status(500).send(createRoleCatchErrorResponse.toObject());
}
})


/**
* 
* --Update Role-- 
* 
*/

/**
 * 
 * --Delete Role--
 * 
 */

 module.exports = router; 