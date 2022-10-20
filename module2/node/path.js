//"C:\Users\upadhyay-pc\Desktop\FJP6\module2\node\path.js"

let path = require("path");
//console.log(path);

let extensionName = path.extname("C:/Users/upadhyay-pc/Desktop/FJP6/module2/node/path.js");
console.log(extensionName);

let baseName = path.basename("C:/Users/upadhyay-pc/Desktop/FJP6/module2/node/childProcess.js");
console.log(baseName);
console.log(__dirname);
console.log(__filename);


let dirPath = __dirname;
console.log(dirPath);

let newfilePath = path.join(dirPath,"test.js");
console.log(newfilePath);