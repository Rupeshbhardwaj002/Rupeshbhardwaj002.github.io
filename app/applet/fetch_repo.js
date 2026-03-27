const fetch = require('node-fetch');
fetch('https://api.github.com/repos/Rupeshbhardwaj002/Vehicle-insurance-')
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));
