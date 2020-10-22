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
const Invoice = require('../models/invoice');
const router = express.Router();

//bring in our base and error response classes
const BaseResponse = require('../services/base-response');
const ErrorResponse = require('../services/error-response');

/**
 * 
 * --Find All Invoices--
 * 
 */



/**
 * 
 * --Find Invoice by ID--
 * Complete by JB
 */
router.get('/:_id', async(req, res) => {
    try{
        Invoice.findOne({
            '_id': req.params._id
        },
        function(err, invoice){
            /**
         * 
         * if db error handle it
         * 
         */
        if(err){
            console.log(err);
            const mongoDbErrorResponse = new ErrorResponse('500', 'Internal Server Error', err)
            res.status(500).send(mongoDbErrorResponse.toObject());
            //if success log the invoice and return the success using base response class
        } else {
            console.log(invoice);
            const findInvoiceByIdSuccessResponse = new BaseResponse('200', 'Successful!', invoice);
            res.json(findInvoiceByIdSuccessResponse.toObject());
        }
        })
        //catch any other errors that might occur
    } catch(e){
        console.log(e);
        const errorCatchResponse = new ErrorResopnse('500', 'Internal Server Error', e.message);
        res.status(500).send(errorCatchResponse.toObject());
    }
}) 



/**
* 
* --CREATE Invoice-- 
* 
*/

router.post('/', function(req, res) {
    // Creates the Invoice
   try {
        Invoice.create(req.body, function(err, invoice) {
            if (err) res.json(err)
            else res.json(invoice)
        })
    } catch (e) {
        res.json(e)
    } 
})

/**
* 
* --Update Invoice-- 
* 
*/

/**
 * 
 * --Delete Invoice--
 * 
 */

module.exports = router; 