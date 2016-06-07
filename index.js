var https = require('https');

var options = {
  host: 'api.github.com',
  method: 'GET',
  headers: {
    'user-agent': 'node.js'
  }
};

var body = '';
var page = 1;
var path = '';
while (true) {
  path = '/repos/Shippable/support/issues?page=' + page;
  options.path = path;
  
}

var request = https.request(options, function(res) {
  console.log('status code : ', res.statusCode);
  console.log(res.headers.link);
  var body = "";
  res.on('data', function(chunk) {
    body += chunk;
  });
  res.on('end', function() {
    var json = JSON.parse(body);
    console.log(json.length);
    console.log('json : ', json);
  });
});

request.end();
