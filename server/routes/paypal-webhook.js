const express = require('express');
const router = express.Router();
const https = require('https')

//bring in our base and error response classes
const BaseResponse = require('../services/base-response');
const ErrorResponse = require('../services/error-response');


router.post('/webhook', async(req, res) => {
    try {
        //log the request and return a 200 to paypal, so they quit trying to resend it
        //console.log(req.body);
       // console.log(req.headers);
        res.status(200).send();

    
        let certURL = req.headers.paypal-cert-url;
        let transmissionId = req.headers.paypal-transmission-id;
        let transmissionSignature = req.headers.paypal-transmission-sig;
        let transmissionTimestamp = req.headers.paypal-transmission-time;
        let auth_logo = req.headers.paypal-auth-algo;
        let requestBody = req.body;

        const data = JSON.stringify({
            auth_logo: auth_logo,
            certURL: certURL,
            transmissionId: transmissionId,
            transmissionSignature: transmissionSignature,
            transmissionTimestamp: transmissionTimestamp,
            webhoo_event: requestBody
          })
          
        //verify it actually came from paypal
        console.log(data);

        //write it to the db if everything is good
       
    } catch (e) {
        console.log(e);
        res.status(500).send(e);
    }
})


module.exports = router; 