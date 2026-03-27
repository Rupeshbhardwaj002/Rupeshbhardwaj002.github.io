const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src', 'pages');
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.tsx'));

const replacements = [
  { from: /border-red-600/g, to: 'border-blue-500' },
  { from: /bg-blue-500\/10\/50/g, to: 'bg-blue-500\/10' },
  { from: /text-red-400/g, to: 'text-blue-400' },
  { from: /hover:border-red-400/g, to: 'hover:border-blue-400' },
  { from: /group-hover:text-red-500/g, to: 'group-hover:text-blue-500' },
  { from: /text-red-500/g, to: 'text-blue-500' },
];

files.forEach(file => {
  const filePath = path.join(pagesDir, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    replacements.forEach(r => {
      content = content.replace(r.from, r.to);
    });
    fs.writeFileSync(filePath, content);
    console.log(`Updated ${file}`);
  }
});
