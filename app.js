const   mongoose    = require('mongoose');
const   express     = require('express');
const   app         = express();
const   connectDB   = require('./dB/config');
const   setupController= require('./controller/setupController');
const   apiController = require('./controller/apiController');

connectDB();
setupController(app);
apiController(app);
app.set('view engine', 'ejs');

app.use('/', express.static(__dirname + '/public'));

var port = process.env.PORT || 3000;

app.listen(port, function(){
    console.log("Node Server is listening on PORT 3000")
});