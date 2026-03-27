const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src', 'pages');
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.tsx'));

const replacements = [
  { from: /bg-indigo-100/g, to: 'bg-indigo-500\/10' },
  { from: /text-indigo-600/g, to: 'text-indigo-400' },
  { from: /bg-orange-100/g, to: 'bg-orange-500\/10' },
  { from: /text-orange-600/g, to: 'text-orange-400' },
  { from: /bg-blue-100/g, to: 'bg-blue-500\/10' },
  { from: /text-blue-600/g, to: 'text-blue-400' },
  { from: /bg-green-100/g, to: 'bg-green-500\/10' },
  { from: /text-green-600/g, to: 'text-green-400' },
  { from: /bg-purple-100/g, to: 'bg-purple-500\/10' },
  { from: /text-purple-600/g, to: 'text-purple-400' },
  { from: /bg-teal-100/g, to: 'bg-teal-500\/10' },
  { from: /text-teal-600/g, to: 'text-teal-400' },
  { from: /bg-pink-100/g, to: 'bg-pink-500\/10' },
  { from: /text-pink-600/g, to: 'text-pink-400' },
  { from: /bg-yellow-100/g, to: 'bg-yellow-500\/10' },
  { from: /text-yellow-600/g, to: 'text-yellow-400' },
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
