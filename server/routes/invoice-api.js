/**
 * 
 * ================================
 * ; Title: invoice-api.js
 * ; Authors: Sarah Kovar; James Brown; Brendan Mulhern
 * ; Date: 10/14/2020
 * ; Description: API for handling CRUD oprations related to invoicing
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
 * Completed by SK
 */

router.get('/', async(req, res) => {
    try{
        Invoice.find({})
        //.where('isDisabled').equals(false)
        .exec(function(err, invoice){

        if(err){
            console.log(err);
            const invoiceFindAllMongoDbErrorResponse = new ErrorResponse('500', 'Internal Server Error', err)
            res.status(500).send(invoiceFindAllMongoDbErrorResponse.toObject());
        } else {
            console.log(invoice);
            const invoiceFindAllMongoDbSuccessResponse = new BaseResponse('200', 'Successful!', invoice);
            res.json(invoiceFindAllMongoDbSuccessResponse.toObject());
        }
        })
    } catch(e){
        console.log(e);
        const invoiceFindAllCatchErrorResponse = new ErrorResponse('500', 'Internal Server Error', e.message);
        res.status(500).send(invoiceFindAllCatchErrorResponse.toObject());
    }
}) 



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
 * --Find Invoice by username--
 * Created by JB
 */

router.get('/user/:username', function(req, res){
    try {
       Invoice.find({'username': req.params.username}, function(error, invoices){
           if(error){
               console.log(error);
               const findInvoiceByUserNameMongoDbErrorResponse = new ErrorResponse('500', 'Internal Server Error!', error);
               res.status(500).send(findInvoiceByUserNameMongoDbErrorResponse.toObject());
           } else {
               const findInvoiceByUserNameMongoDbSuccess = new BaseResponse('200', 'Successful GET Request', invoices);
               res.json(findInvoiceByUserNameMongoDbSuccess.toObject());
           }
       })
    } catch (e) {
        console.log(e);
        const findInvoiceByUserNameCatchErrorResponse = new ErrorResponse('500', 'Internal Server Error!', e.message);
        res.status(500).send(findInvoiceByUserNameCatchErrorResponse.toObject());
    }
})


 /**
 * 
 * --FindPurchasesByService (purchases-graph)--
 * Created by JB
 */
router.post('/purchases', function(req, res){
    try {
        Invoice.find({'lineItem.title': req.body.title}, function(error, purchases){
            if(error){
                console.log(error);
                const findPurchasesByServiceMongoDbErrorResponse = new ErrorResponse('500', 'Internal Server Error!', error);
                res.status(500).send(findPurchasesByServiceMongoDbErrorResponse.toObject());
            } else {
                const findPurchasesByServiceMongoDbSuccess = new BaseResponse('200', 'Successful GET Request', purchases);
                res.json(findPurchasesByServiceMongoDbSuccess.toObject());
            }
        })
     } catch (e) {
         console.log(e);
         const findPurchasesByServiceCatchErrorResponse = new ErrorResponse('500', 'Internal Server Error!', e.message);
         res.status(500).send(findPurchasesByServiceCatchErrorResponse.toObject());
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
            if (err) { 
                const ErrorMessage = new ErrorResponse('500', 'internal server error', err)
                res.json(ErrorMessages) 
            } else { 
                const SuccessMessage = new BaseResponse('200', 'Successful POST Request', invoice) //JB fixed error with invoice. current value in thir param: err, updated to "invoice", so object gets returnerd.
                res.json(SuccessMessage.toObject());//jb updated to use agreed upon syntax
            }
        })
    } catch (e) {
        const ErrorMessage = new ErrorResponse('500', 'internal server error', err)
        res.json(ErrorMessage)
    } 
})

/**
* 
* --Update Invoice-- 
* 
*/
router.put('/:id', function(req, res) {
    try {
    // Find Invoice By Id
    Invoice.findOne({ "_id": req.params.id }, function(err, updatedInvoice) {
        if (err) {
            const ErrorMessage = new ErrorResponse('500', 'Internal Server Error', err)
            res.json(ErrorMessage)
        // Create new invoice and saves
         } else {
        // Sets new invoice
            updatedInvoice.set({
                "lineItem": {
                    "title": req.body.lineItem.title,
                    "price": req.body.lineItem.price
      //this needs removed bc we aren't altering the catalog "isDisabled": req.body.lineItem.isDisabled
            },
                "partsAmount": req.body.partsAmount,
                "laborAmount": req.body.laborAmount,
                "lineItemAmount": req.body.lineItemAmount,
                "total": req.body.total,
                "username": req.body.username,
                "orderDate": req.body.orderDate
            })
            updatedInvoice.save(function(err, Invoice) {
                if (err) {
                     const ErrorMessage = new ErrorResponse('500', 'Interna; Server Error', err)
                     res.json(ErrorMessage)
                } else { 
                    const SuccessMessage = new BaseResponse('200', 'Internal Server Error', invoice)
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

/**
 * 
 * --Delete Invoice--
 * Completed by SK
 */

router.patch('/:id', function(req, res) {
    try { 
    Invoice.findOne({ "_id": req.params.id }, function(err, invoice) {
         if (err){
             console.log(err);
             const invoiceDeleteMongoDbErrorResponse = new ErrorResponse('500', 'Internal Server Error', err)
             res.status(500).send(invoiceDeleteMongoDbErrorResponse.toObject());
         }
         else {
             console.log(invoice);
             invoice.set({
                isDisabled: true
             });

             invoice.save(function(err, savedInvoice) {
                if (err) { 
                    console.log(err);
                    const invoiceSavedMongoDbErrorResponse = new ErrorResponse('500', 'Internal Server Error', err)
                    res.status(500).send(invoiceSavedMongoDbErrorResponse.toObject());
                }else { 
                    console.log(savedInvoice);
                    const invoiceSavedResponse = new BaseResponse('200', 'Successful!', savedInvoice);
                    res.json(invoiceSavedResponse.toObject());
                 }
         })
        }
     })
    } catch(e) {
        console.log(e);
        const invoiceDeleteMongoDbErrorResponse = new ErrorResponse('500', 'Internal Server Error', e.message)
        res.status(500).send(invoiceDeleteCatchErrorResponse.toObject());
    }
 });

module.exports = router; 