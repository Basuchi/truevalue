const express = require('express');
const app = express();
const router = express.Router();
var path = require('path');
//const { getHomePage } = require('../controllers/home-controller');
//router.get(getHomePage);

router.get('/list', function (request, response) {
    
    var options = {
        root: path.join(__dirname + "/../public/view/")
    };
    //console.log(options);
    response.render('admin');
});

module.exports = router;