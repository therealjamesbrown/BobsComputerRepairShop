const express = require('express');
const router = express.Router();
const https = require('https');


//bring in our base and error response classes
const BaseResponse = require('../services/base-response');
const ErrorResponse = require('../services/error-response');


router.post('/webhook', async(req, res) => {
    try {
        //log the request and return a 200 to paypal, so they quit trying to resend it
        //console.log(req.body);
       // console.log(req.headers);
        res.status(200).send();


        //retrieve the values for your request, so you can verify it came from paypal
        let certURL = req['headers']['paypal-cert-url'];
        let transmissionId = req['headers']['paypal-transmission-id'];
        let transmissionSignature = req['headers']['paypal-transmission-sig'];
        let transmissionTimestamp = req['headers']['paypal-transmission-time'];
        let auth_logo = req['headers']['paypal-auth-algo'];
        let requestBody = req.body;

        //construct the POST headers

        //construct the POST body
        const webhookEventForVerification = JSON.stringify({
            auth_logo: auth_logo,
            certURL: certURL,
            transmissionId: transmissionId,
            transmissionSignature: transmissionSignature,
            transmissionTimestamp: transmissionTimestamp,
            webhook_event: requestBody
          })
          console.log(webhookEventForVerification);

        //send it off to PayPal for verification
        

        //write it to the db if everything is good

        
        //handle however you want if it is not good.
       
    } catch (e) {
        console.log(e);
        res.status(500).send(e);
    }
})


module.exports = router; 