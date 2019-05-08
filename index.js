let request = require('request');


let apikey = "6f5b91d03a78ece24dc1d548d6069995";
let city = "Portland";
let url = 'api.openweathermap.org/data/2.5/weather?q={Portland}';




request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    console.log('body:', body);
  }
});