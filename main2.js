var express = require('express'),
app = express(); 
console.log(__dirname);
app.use('/', express.static(__dirname + '/'));
app.get('/get', function (req, res) {
   console.log("Got a GET request for the homepage");
   res.send('Hello GET');
})
app.get('/get2', function (req, res) {
   console.log("Got a GET2 request for the homepage");
   res.send('Hello GET2');
})
app.listen(8081);	