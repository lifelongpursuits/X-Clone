const fs = require('fs-extra');
const path = require('path');

// Directories and files to copy
const itemsToCopy = [
  { src: 'src', dest: 'build/src' },
  { src: 'public', dest: 'build/public' },
  { src: 'package.json', dest: 'build/package.json' },
  { src: 'README.md', dest: 'build/README.md' }
];

// Copy files
itemsToCopy.forEach(item => {
  fs.copySync(
    path.resolve(__dirname, item.src), 
    path.resolve(__dirname, item.dest)
  );
  console.log(`Copied ${item.src} to ${item.dest}`);
});
