var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(express.static('assets'))
app.use(bodyParser.json())


var messages = ["ni hao ma", "wo hen hao ni ne?", "jen de ma?", "Ja de, ke shi wo bu ji dao"]

app.get('/messages', function (req, res, next) {
  res.status(200).json({ messages: messages });
});

app.post('/messages', function (req, res, next) {
  console.log(req.body);

  messages.push({ message: req.body.message, time: new Date() });
  res.status(200).json({ messages: messages });
});

app.listen(3000, function(){
  console.log('listening on port 3000');
})
