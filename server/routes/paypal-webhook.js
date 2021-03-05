const express = require('express');
const router = express.Router();
const https = require('https');

const axios = require('axios')


//bring in our base and error response classes
const BaseResponse = require('../services/base-response');
const ErrorResponse = require('../services/error-response');


router.post('/webhook', async(req, res) => {
    try {
        //log the request and return a 200 to paypal, so they quit trying to resend it
        res.status(200).send();
        //console.log(req.body);
       // console.log(req.headers);
        


        //retrieve the values for your request, so you can verify it came from paypal
        let certURL = req['headers']['paypal-cert-url'];
        let transmissionId = req['headers']['paypal-transmission-id'];
        let transmissionSignature = req['headers']['paypal-transmission-sig'];
        let transmissionTimestamp = req['headers']['paypal-transmission-time'];
        let auth_logo = req['headers']['paypal-auth-algo'];
        let webhook_event = req.body;
        let accessToken = 'A21AAIglYXftVLuGW2LniHz9iZ6dKhmzWL7mW7RThr5v27yMLkuqS7bUmV5fFSNJlOqIld6BOyDIYY_LWDY4kUfEiyz0mErpQ';

        //construct the POST body
        let webhookEventForVerification = {
            auth_logo: auth_logo,
            certURL: certURL,
            transmissionId: transmissionId,
            transmissionSignature: transmissionSignature,
            transmissionTimestamp: transmissionTimestamp,
            webhook_event: webhook_event
          };
          //console.log(webhookEventForVerification);

        let webhookVerifciationURL = 'https://api-m.sandbox.paypal.com/v1/notifications/verify-webhook-signature';
        let webhookSiteURL = 'https://webhook.site/081c42e7-b0d6-48f4-a11c-8912dfd9be03'
        //send it off to PayPal for verification
        axios.post(webhookVerifciationURL, {
            auth_logo, certURL, transmissionId, transmissionSignature, 
            transmissionTimestamp, webhook_event}, {
            headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + accessToken
            }
          }
        ).then(res => {
            //console.log(`statusCode: ${res.statusCode}`)
            console.log(res.data.response);
          })
          .catch(error => {
            console.error(error)
          })
        //write it to the db if everything is good

        
        //handle however you want if it is not good.
       
    } catch (e) {
        console.log(e);
        res.status(500).send(e);
    }
})


module.exports = router; 