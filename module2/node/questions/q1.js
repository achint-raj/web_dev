//make a folder inside same directory of this file and in that folder make a text file with content
//new file has been made

let fs= require("fs");
let path = require("path");
if(!fs.existsSync("newfolder"))
fs.mkdirSync("newfolder");

let filekapath = path.join(__dirname,"newfolder","newfile.txt");
console.log(filekapath);
fs.writeFileSync(filekapath,"new file has been made");
