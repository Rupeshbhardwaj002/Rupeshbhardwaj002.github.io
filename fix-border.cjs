const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'pages', 'Home.tsx');
let content = fs.readFileSync(filePath, 'utf8');

content = content.replace(/border-slate-900/g, 'border-[#f4f9fc]');

fs.writeFileSync(filePath, content);
console.log('Fixed border-slate-900');
