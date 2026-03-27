const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src', 'pages');
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.tsx'));

const replacements = [
  // Gradients
  { from: /from-blue-500 to-violet-500/g, to: 'from-orange-400 to-red-500' },
  
  // Backgrounds
  { from: /bg-slate-900\/80/g, to: 'bg-white/80' },
  { from: /bg-slate-900\/50/g, to: 'bg-slate-50' },
  { from: /bg-slate-900/g, to: 'bg-[#f4f9fc]' },
  { from: /bg-slate-800/g, to: 'bg-white' },
  { from: /bg-blue-600 text-white/g, to: 'bg-slate-900 text-white' },
  { from: /hover:bg-slate-800/g, to: 'hover:bg-slate-50' },
  
  // Text colors
  { from: /text-slate-50/g, to: 'text-slate-900' },
  { from: /text-slate-100/g, to: 'text-slate-800' },
  { from: /text-slate-300/g, to: 'text-slate-700' },
  { from: /text-slate-400/g, to: 'text-slate-600' },
  
  // Borders
  { from: /border-slate-700\/50/g, to: 'border-slate-200' },
  { from: /border-slate-700/g, to: 'border-slate-200' },
  { from: /border-slate-600/g, to: 'border-slate-300' },
  
  // Red/Orange primary colors
  { from: /text-blue-400/g, to: 'text-red-600' },
  { from: /text-blue-300/g, to: 'text-red-700' },
  { from: /text-blue-200/g, to: 'text-red-900' },
  { from: /bg-blue-500\/10/g, to: 'bg-red-50' },
  { from: /bg-blue-500\/20/g, to: 'bg-red-100' },
  { from: /bg-blue-500/g, to: 'bg-red-600' },
  { from: /border-blue-500\/30/g, to: 'border-red-100' },
  { from: /border-blue-500\/50/g, to: 'border-red-300' },
  { from: /border-blue-500/g, to: 'border-red-600' },
  { from: /shadow-blue-500\/20/g, to: 'shadow-red-200/50' },
  { from: /hover:border-blue-400/g, to: 'hover:border-red-400' },
  { from: /group-hover:text-blue-500/g, to: 'group-hover:text-red-500' },
  { from: /text-blue-500/g, to: 'text-red-500' },
  { from: /hover:text-blue-400/g, to: 'hover:text-red-600' },
  
  // Other badge colors
  { from: /bg-indigo-500\/10/g, to: 'bg-indigo-100' },
  { from: /text-indigo-400/g, to: 'text-indigo-600' },
  { from: /bg-orange-500\/10/g, to: 'bg-orange-100' },
  { from: /text-orange-400/g, to: 'text-orange-600' },
  { from: /bg-green-500\/10/g, to: 'bg-green-100' },
  { from: /text-green-400/g, to: 'text-green-600' },
  { from: /bg-purple-500\/10/g, to: 'bg-purple-100' },
  { from: /text-purple-400/g, to: 'text-purple-600' },
  { from: /bg-teal-500\/10/g, to: 'bg-teal-100' },
  { from: /text-teal-400/g, to: 'text-teal-600' },
  { from: /bg-pink-500\/10/g, to: 'bg-pink-100' },
  { from: /text-pink-400/g, to: 'text-pink-600' },
  { from: /bg-yellow-500\/10/g, to: 'bg-yellow-100' },
  { from: /text-yellow-400/g, to: 'text-yellow-600' },
];

files.forEach(file => {
  const filePath = path.join(pagesDir, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    replacements.forEach(r => {
      content = content.replace(r.from, r.to);
    });
    fs.writeFileSync(filePath, content);
    console.log(`Reverted ${file}`);
  }
});
