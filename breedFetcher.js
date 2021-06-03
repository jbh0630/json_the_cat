const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  
  const URL = 'https://api.thecatapi.com/v1/breeds/search?q=';

  request(`${URL}${breedName}`, (error, response, body) => {
  
    const data = JSON.parse(body);
    if (data.length === 0) {
      callback(`The cat information is invalid`, null);
      return;
    }
    callback(error, data[0].description);
  });
};

module.exports = { fetchBreedDescription };