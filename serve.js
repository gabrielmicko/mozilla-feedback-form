var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
var config = require('./src/Config/config.json');
var cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

app.put('/saveFeedback', function(req, resp) {
  fs.readFile('./feedback/storage.json', 'utf8', function(err, data) {
    if (err) throw err;
    var feedbacks = JSON.parse(data);
    var d = new Date();
    var dformat =
      [d.getMonth() + 1, d.getDate(), d.getFullYear()].join('/') +
      ' ' +
      [d.getHours(), d.getMinutes(), d.getSeconds()].join(':');
    feedbacks.push({
      stars: req.body.stars,
      feedback: req.body.feedback,
      date: dformat
    });

    fs.writeFileSync('./feedback/storage.json', JSON.stringify(feedbacks));
    resp.send({ code: 200 });
  });
});

app.listen(config.port, function() {
  console.log('Running API on port ' + config.port + '!');
});
