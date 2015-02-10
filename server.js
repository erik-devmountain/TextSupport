var express = require('express');
var bodyParser = require('body-parser');
var twilio = require('twilio');
var Firebase = require("firebase");

var app = express();

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static(__dirname+'/public'));

var accountSid = 'ACfcdfe0c7200797bbbf956f456ebe223c';
var authToken = 'ba67926e1e4aa1dbfc136fb32f79abde';

// new Firebase('https://textsupport-erik.firebaseio.com/numbers');
var ref = new Firebase("https://textsupport-erik.firebaseio.com/numbers"); 

app.post('/support/messages', function(req, res){
  ref.push({
    to: "+17327579649", 
    from: "+17323911035",
    body: req.body.contents
  })
  var client = require('twilio')(accountSid, authToken);
  console.log(req.body.contents);
  client.messages.create({
    body: req.body.contents,
    to: "+17327579649", 
    from: "+17323911035"
  }, function(err, message){
    console.log(err);
    console.log(message);
  })
  res.send("message delivered");
})


app.listen(8080);