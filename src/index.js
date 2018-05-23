require('isomorphic-fetch');

const urlBuilder = require('./builder/url');
const API_PATH = 'api/users.json';

// template stringi
// to sa promisy
const fetchPromise = fetch(urlBuilder(API_PATH));

const fetchedData = fetchPromise.then(function(response) {
                        return response.json()
                    })
                    .then(function(data) {
                        return data;
                    });

fetchedData.then(function(data) {
                console.log(data);
});


// async await poczytaj.
//const main = async function() {
//    const response = await fetch(`${API_HOST}:${API_PORT}/${API_PATH}`);
//    const json = await response.json();
//    console.log(json);
//}
//
//
//main();