const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src', 'pages');
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.tsx'));

const replacements = [
  // Backgrounds
  { from: /bg-\[\#f4f9fc\]/g, to: 'bg-slate-900' },
  { from: /bg-slate-50/g, to: 'bg-slate-900' },
  { from: /bg-white/g, to: 'bg-slate-800' },
  { from: /bg-slate-900 text-white/g, to: 'bg-blue-600 text-white' },
  { from: /hover:bg-slate-800/g, to: 'hover:bg-blue-700' },
  
  // Text colors
  { from: /text-slate-900/g, to: 'text-slate-50' },
  { from: /text-slate-800/g, to: 'text-slate-100' },
  { from: /text-slate-700/g, to: 'text-slate-300' },
  { from: /text-slate-600/g, to: 'text-slate-400' },
  { from: /text-slate-500/g, to: 'text-slate-400' },
  { from: /text-\[\#181717\]/g, to: 'text-slate-300' }, // GitHub icon color
  
  // Borders
  { from: /border-slate-100/g, to: 'border-slate-700' },
  { from: /border-slate-200/g, to: 'border-slate-700' },
  { from: /border-slate-300/g, to: 'border-slate-600' },
  { from: /border-white/g, to: 'border-slate-900' },
  
  // Red to Blue/Violet
  { from: /text-red-600/g, to: 'text-blue-400' },
  { from: /text-red-700/g, to: 'text-blue-300' },
  { from: /text-red-900/g, to: 'text-blue-200' },
  { from: /bg-red-50/g, to: 'bg-blue-500\/10' },
  { from: /bg-red-100/g, to: 'bg-blue-500\/20' },
  { from: /bg-red-400/g, to: 'bg-blue-500' },
  { from: /bg-red-600/g, to: 'bg-blue-500' },
  { from: /border-red-100/g, to: 'border-blue-500\/30' },
  { from: /border-red-300/g, to: 'border-blue-500\/50' },
  { from: /shadow-red-200\/50/g, to: 'shadow-blue-500\/20' },
  
  // Gradients
  { from: /from-orange-400 to-red-500/g, to: 'from-blue-500 to-violet-500' },
  { from: /from-red-600 to-orange-500/g, to: 'from-blue-500 to-violet-500' },
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
