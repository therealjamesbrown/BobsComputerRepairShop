const express = require('express');
const router = express.Router();
const https = require('https')

//bring in our base and error response classes
const BaseResponse = require('../services/base-response');
const ErrorResponse = require('../services/error-response');


router.post('/webhook', async(req, res) => {
    try {
        //log the request and return a 200 to paypal, so they quit trying to resend it
        console.log(req.body);
        console.log(req.headers);
        res.status(200).send('Success!');

        /*verify the dang thing is actually from paypal
        let certURL = "https://api.sandbox.paypal.com/v1/notifications/certs/CERT-360caa42-fca2a594-a5cafa77";
        let transmissionId = "103e3700-8b0c-11e6-8695-6b62a8a99ac4";
        let transmissionSignature = "t8hlRk64rpEImZMKqgtp5dlWaT1W8ed/mf8Msos341QInVn3BMQubjAhM/cKiSJtW07VwJvSX7X4+YUmHBrm5BQ+CEkClke4Yf4ouhCK6GWsfs0J8cKkmjI0XxfJpPLgjROEWY3MXorwCtbvrEo5vrRI2+TyLkquBKAlM95LbNWG43lxMu0LHzsSRUBDdt5IP1b2CKqbcEJKGrC78iw+fJEQGagkJAiv3Qvpw8F/8q7FCQAZ3c81mzTvP4ZH3Xk2/nNznEA7eMi3u1EjSpTmLfAb423ytX37Ts0QpmPNgxJe8wnMB/+fvt4xjYH6KNe+bIcYU30hUIe9O8c9UFwKuQ==";
        let transmissionTimestamp = "2016-10-05T14:57:40Z";
        let auth_logo = "test_value";

        const data = JSON.stringify({
            certURL: certURL,
            transmissionId: transmissionId,
            transmissionSignature: transmissionSignature,
            transmissionTimestamp: transmissionTimestamp,
          })*/
          

        //write it to the db if everything is good
       
    } catch (e) {
        console.log(e);
        res.status(500).send(e);
    }
})


module.exports = router; 