const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src', 'pages');
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.tsx'));

const replacements = [
  { from: /group-hover:text-blue-700/g, to: 'group-hover:text-indigo-700' },
  { from: /border-b-2 border-blue-600/g, to: 'border-b-2 border-indigo-600' },
  { from: /hover:border-blue-100/g, to: 'hover:border-indigo-100' },
];

files.forEach(file => {
  const filePath = path.join(pagesDir, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    replacements.forEach(r => {
      content = content.replace(r.from, r.to);
    });
    fs.writeFileSync(filePath, content);
  }
});
