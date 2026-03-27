const fetch = require('node-fetch'); // or just use global fetch in newer node
fetch('https://raw.githubusercontent.com/Rupeshbhardwaj002/Mlops-Capstone-Project-II/main/README.md')
  .then(r => r.text())
  .then(t => {
    const start = t.indexOf('```mermaid');
    const end = t.indexOf('```', start + 10);
    console.log(t.substring(start, end + 3));
  });
