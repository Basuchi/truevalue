const express = require('express');
const app = express();
const dotenv = require('dotenv');
var path = require('path');
dotenv.config();
// configuration ===============================================================
require('./config/setup');
//require('./config/mongo-connection');
app.use(express.static(__dirname + '/public'));
app.use('/css', express.static(__dirname + '/public/css'));
app.use('/img', express.static(__dirname + '/public/images'));
app.use('/view', express.static(path.join(__dirname + "/../public/views/")) );
app.set('view engine','ejs');
//Route=========================================================================
const router = require('./routes/home.route');
app.use('/', router); // default route to all requests
const adminRouter = require('./routes/admin.route');
app.use('/admin', adminRouter); // default route to all requests

// Load api
/*app.get('/admin/list', function (request, response) {
    console.log(__dirname);
    response.render('customer-list');
});
*/

//PORT env========================================================================
const port = process.env.PORT || 4000
app.listen(port, () => console.log(`Listening on port ${port}....`));