//dependencies
var express = require('express');
var router = express.Router();
var request = require('request');

//configuration parameters for redirect URIs
var config = require('./config.js');


//routes
//Receive the accesstoken and profile data after authentication from microservice
router.get('/userpage', function (req, res) {
    //Give the provider_redirecturi in the provider app configuration page
    //Read the VCAP services- reading authenicateurl and logouturl provided by AuthService
    var services = JSON.parse(process.env.VCAP_SERVICES || "{}");
    var ssoConfig = services.AuthService[0].credentials;
    var logouturl = ssoConfig.logouturl;
    var auhenticateurl = ssoConfig.auhenticateurl;
    var redirecturi = config.redirecturi;
 
    //Show the user profile sample data
    var url = logouturl+"?redirectUri="+redirecturi;
    res.send('Hello, '+ req.query.name + '!\n' + '<a href='+url+'>Log Out</a>');
 
});

//Starting page to lauch the application - Show login which redirects to microservice to authenticate with the configured provider
router.get('/', function (req, res) {
    //Give the provider_redirecturi in the provider app configuration page
    //Read the VCAP services- reading authenicateurl and logouturl provided by AuthService
    var services = JSON.parse(process.env.VCAP_SERVICES || "{}");
    var ssoConfig = services.AuthService[0].credentials;
    var logouturl = ssoConfig.logouturl;
    var auhenticateurl = ssoConfig.auhenticateurl;
    var redirecturi_homepage = config.redirecturi_homepage;

    //Show the authentication page
    var url = auhenticateurl+"?redirecturi="+redirecturi_homepage;
    res.send('<h1>Authentication Service</h1>' + '<a href='+url+'>Sign In with a Social identity source</a>');
 
});

module.exports = router;