var express = require('express');
app = express();

app.use(express.static('public'));

http = require('http');
httpServer = http.Server(app);


app.get('/*', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.listen(3000);
