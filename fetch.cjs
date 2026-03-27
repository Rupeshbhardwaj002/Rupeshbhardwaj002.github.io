const https = require('https');
https.get('https://raw.githubusercontent.com/Rupeshbhardwaj002/Mlops-Capstone-Project-II/main/README.md', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => { console.log(data); });
});
