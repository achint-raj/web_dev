let cp = require('child_process');
//console.log(cp);
//cp.execSync("calc");
//open vscode with childprocess
//cp.execSync("code");
let content = cp.execSync("node test.js");

console.log("Output of test.js file:"+content);