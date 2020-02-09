const request = require('request');

var options = { method: 'GET', url: 'https://api.shipit.cl/v/communes' };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});