const request = require('request');
 
const json = {
    "date": "13/02/2019",
    "time awake": "5:00",
    "distance ran": "25km",
    "meditate": "yes",
};
 
request.post({
    url: 'http://localhost:3002/dailytarget',
    body: json,
    json: true,
}, function (error, response, body) {
    console.log(body);
});