// Path module use for working with paths in Node.js
// Connect Path module and get the absolute path to file text.txt
const path = require('path');
const filePath = path.resolve(__dirname, './text.txt');


// File system module (fs) use for working with files and folders
// Import fs
const fsFile = require('fs');
const fullFile = fsFile.createReadStream(filePath, 'utf-8');


// Define standard output stream
const { stdout } = require('process');

// Output content of textfile to console
fullFile.on('data', data => stdout.write(data));