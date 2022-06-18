const express = require('express');
const app = express();
const router = express.Router();
var path = require('path');
//const { getHomePage } = require('../controllers/home-controller');
//router.get(getHomePage);

router.get('', function (request, response) {    
    var options = {
        root: path.join(__dirname+"/../public/views/")
    };   
    response.sendFile('index.html', options,(req,res)=>{       
    });
});

module.exports = router;