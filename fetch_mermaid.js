const fs = require('fs');
fetch('https://raw.githubusercontent.com/Rupeshbhardwaj002/Mlops-Capstone-Project-II/main/README.md')
  .then(r => r.text())
  .then(t => {
    const start = t.indexOf('```mermaid');
    const end = t.indexOf('```', start + 10);
    fs.writeFileSync('/mermaid.txt', t.substring(start, end + 3));
  });
