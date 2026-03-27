const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src', 'pages');
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.tsx'));

const replacements = [
  // Background
  { from: /bg-\[\#f4f9fc\]/g, to: 'bg-[#FAFAFA]' },
  
  // Gradients (Name and Buttons)
  { from: /from-blue-500 to-green-500/g, to: 'from-slate-900 to-slate-600' },
  { from: /shadow-blue-200\/50/g, to: 'shadow-slate-200/50' },
  
  // Primary Accents (Blue -> Indigo for a classier, more muted tech look)
  { from: /text-blue-600/g, to: 'text-indigo-600' },
  { from: /text-blue-900/g, to: 'text-indigo-900' },
  { from: /bg-blue-100/g, to: 'bg-indigo-50' },
  { from: /bg-blue-50/g, to: 'bg-slate-50' },
  { from: /border-blue-300/g, to: 'border-indigo-200' },
  { from: /hover:text-blue-600/g, to: 'hover:text-indigo-600' },
  { from: /group-hover:text-blue-600/g, to: 'group-hover:text-indigo-600' },
  { from: /group-hover:border-blue-300/g, to: 'group-hover:border-indigo-200' },
  { from: /selection:bg-blue-100/g, to: 'selection:bg-indigo-100' },
  { from: /selection:text-blue-900/g, to: 'selection:text-indigo-900' },
  
  // Secondary Accents (Green -> Slate/Muted for a cleaner look)
  { from: /text-green-500/g, to: 'text-slate-500' },
  { from: /to-green-500/g, to: 'to-slate-500' },
  { from: /border-green-400/g, to: 'border-slate-300' },
  { from: /bg-green-100/g, to: 'bg-slate-100' },
  { from: /text-green-600/g, to: 'text-slate-600' },
  { from: /hover:border-green-400/g, to: 'hover:border-slate-300' },
];

files.forEach(file => {
  const filePath = path.join(pagesDir, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    replacements.forEach(r => {
      content = content.replace(r.from, r.to);
    });
    fs.writeFileSync(filePath, content);
    console.log(`Updated ${file} to classy theme`);
  }
});
