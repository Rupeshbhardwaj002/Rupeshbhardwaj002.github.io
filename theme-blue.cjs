const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src', 'pages');
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.tsx'));

const replacements = [
  // Gradients
  { from: /from-orange-400 to-red-500/g, to: 'from-blue-500 to-indigo-500' },
  
  // Text colors
  { from: /text-red-900/g, to: 'text-blue-900' },
  { from: /text-red-700/g, to: 'text-blue-700' },
  { from: /text-red-600/g, to: 'text-blue-600' },
  { from: /text-red-500/g, to: 'text-blue-500' },
  
  // Backgrounds
  { from: /bg-red-50/g, to: 'bg-blue-50' },
  { from: /bg-red-100/g, to: 'bg-blue-100' },
  { from: /bg-red-500/g, to: 'bg-blue-500' },
  { from: /bg-red-600/g, to: 'bg-blue-600' },
  
  // Borders
  { from: /border-red-100/g, to: 'border-blue-100' },
  { from: /border-red-300/g, to: 'border-blue-300' },
  { from: /border-red-400/g, to: 'border-blue-400' },
  { from: /border-red-600/g, to: 'border-blue-600' },
  
  // Shadows
  { from: /shadow-red-200\/50/g, to: 'shadow-blue-200/50' },
  
  // MLOps specific orange ones
  { from: /hover:border-orange-400/g, to: 'hover:border-indigo-400' },
  { from: /group-hover:text-orange-500/g, to: 'group-hover:text-indigo-500' },
  { from: /bg-orange-100/g, to: 'bg-indigo-100' },
  { from: /text-orange-600/g, to: 'text-indigo-600' },
];

files.forEach(file => {
  const filePath = path.join(pagesDir, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    replacements.forEach(r => {
      content = content.replace(r.from, r.to);
    });
    fs.writeFileSync(filePath, content);
    console.log(`Updated ${file} to blue primary`);
  }
});
