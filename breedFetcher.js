const request = require('request');
const fs = require('fs');

const args = process.argv.slice(2);
const URL = `https://api.thecatapi.com/v1/breeds/search?q=${args[0].toLocaleLowerCase()}`;

request(URL, (error, response, body) => {
  if (error || body === undefined) {
    console.log(error);
  } else {
    const data = JSON.parse(body);
    console.log(data);
    console.log(typeof data);  
  }
});