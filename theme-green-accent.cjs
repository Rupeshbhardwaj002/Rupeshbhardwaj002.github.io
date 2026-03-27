const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src', 'pages');
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.tsx'));

const replacements = [
  { from: /to-indigo-500/g, to: 'to-green-500' },
  { from: /border-indigo-400/g, to: 'border-green-400' },
  { from: /text-indigo-500/g, to: 'text-green-500' },
  { from: /bg-indigo-100/g, to: 'bg-green-100' },
  { from: /text-indigo-600/g, to: 'text-green-600' },
];

files.forEach(file => {
  const filePath = path.join(pagesDir, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    replacements.forEach(r => {
      content = content.replace(r.from, r.to);
    });
    fs.writeFileSync(filePath, content);
    console.log(`Updated ${file} to green accent`);
  }
});
