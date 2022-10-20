//copy index.html file from module1 to a new folder inside module2 having name html.
let fs = require("fs");
let path = require("path");
 
let srcpath = path.join(__dirname,"..","..","..","module1","index.html");
console.log("source path-->" ,srcpath);
let destpath = path.join(__dirname,"..","..","index.html");
console.log("destpath-->", destpath);
fs.copyFileSync(srcpath,destpath);