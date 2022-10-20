let fs = require("fs");
//console.log(fs);

 let path = require("path");
// let filePath = path.join(__dirname,"file.txt");
// console.log(filePath);
// //create
// fs.writeFileSync(filePath,"Hi holi hai");

// //read
// let content = fs.readFileSync(filePath,'utf-8');
// console.log(content);

// //update
// fs.appendFileSync(filePath," newly addded content");console.log("After update:");
// console.log(fs.readFileSync(filePath,'utf-8'));

// //delete
// fs.unlinkSync(filePath);

//creating a directory
if(!fs.existsSync("hamaridirectory"))
fs.mkdirSync("hamaridirectory");


//read a directory
let folderpath = "C:/Users/upadhyay-pc/Desktop/FJP6/module1";
let contentoffolder = fs.readdirSync(folderpath);
console.log(contentoffolder);

//delete a direrctory
fs.rmdirSync("hamaridirectory");

//copy a file
let sourcepath = path.join(__dirname,"file.txt");
let destinationpath = path.join(__dirname,"module","file.txt");
console.log(sourcepath);
console.log(destinationpath);

fs.copyFileSync(sourcepath,destinationpath);

