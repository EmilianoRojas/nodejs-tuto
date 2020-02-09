/*const fetch = require('node-fetch');

let promesa = fetch('https://api.github.com/users/emilianorojas');
promesa.then((res)=>{
    return res.json();
}).then((json)=>{
    console.log(json);
});*/

var request = require("request");

var options = { method: 'GET',
  url: 'https://api.shipit.cl/v/regions',
  headers:
   { 'x-shipit-access-token': 'MWhEAdkHKYdscen_4cxR',
     'x-shipit-email': 'prueba_front@shipit.cl' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(response.json());
});

