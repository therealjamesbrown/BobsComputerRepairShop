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

 //TODO Import Catalog model
 const router = express.Router();

// Import the Catalog Model
const Catalog = require('../models/catalog')


 //bring in our base and error response classes
 const BaseResponse = require('../services/base-response');
 const ErrorResponse = require('../services/error-response');

 
 /**
  * 
  * --Find All Items--
  * 
  */




router.get('/', async(req, res) => {
  try{
    //pulling all documents, so we'll leave the request object empty and 
    //just worry about the callback function.
    Catalog.find({},
      function(err, item){
        if(err){
          console.log(err);
          const mongoDbFindAllErrorResponse = new ErrorResponse('500', 'Internal Server Error', err)
          res.status(500).send(mongoDbFindAllErrorResponse.toObject());
        } else {
          console.log(item);
          const findAllSuccessResponse = new BaseResponse('200', 'Successful!', item);
          res.json(findAllSuccessResponse.toObject());
        }
      });
  }catch(e){
    console.log(e);
    const errorFindAllCatchResponse = new ErrorResponse('500', 'Internal Server Error', e.message);
    res.status(500).send(errorFindAllCatchResponse.toObject());
  }
});





 /**
  * 
  * --Find Item by ID--
  * 
  */

  router.get('/:id', function(req, res) {
    try {
      // Find the indivudal item
      Catalog.findOne({ "_id": req.params.id }, function(err, item) {
        if (err) res.json(err)
        // output the single item
        else res.json(item)
      })
    } catch (e) {
      console.log(e)
    }
  })


/**
 * 
 * --CREATE Item-- 
 * 
 */



 /**
 * 
 * --Update Item-- 
 * 
 */

 /**
  * 
  * --Delete Item--
  * 
  */
  router.patch('/:_id', async(req, res) => {
    try{
      Catalog.findOne({'_id': req.params._id}, function(error, item){
        if(error){
          console.log(error);
          const deleteTaskMongoErrorReponse = new ErrorResponse('500', 'Internal Server Error', err);
          res.status(500).send(deleteTaskMongoErrorReponse.toObject());
        } else {
          item.set({
            isDisabled: req.body.isDisabled
          });

          item.save(function(err, updatedItem){
            if(err){
              console.log(err);
              const updateIsDisabledStatusError = new ErrorResponse('500', 'Internal Server Error', err);
              res.status(500).send(updateIsDisabledStatusError.toObject());
            } else {
              console.log(updatedItem);
              const updateIsDisabledStatusSuccess = new BaseResponse('200', 'Success!', updatedItem);
              res.json(updateIsDisabledStatusSuccess.toObject());
            }
          })
        }
      })
    }catch(err){
      console.log(err);
      const updateIsDisabledCatchError = new ErrorResponse('500', 'Internal Server Error', err.message);
      res.status(500).send(updateIsDisabledCatchError.toObject());
    }
  })

 module.exports = router; 