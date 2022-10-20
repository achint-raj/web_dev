//move a file
let fs = require("fs");
let path = require("path");
let srcpath = path.join(__dirname,"file1.txt");
console.log(srcpath);
let destpath = path.join(__dirname,"newFolder","file1.txt");
fs.copyFileSync(srcpath,destpath);
fs.unlinkSync(srcpath);