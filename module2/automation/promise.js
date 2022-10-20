const fs = require("fs");
console.log("Before");
let f1kaPromise = fs.promises.readFile("f1.txt");
let f2kaPromise = fs.promises.readFile("f2.txt");
console.log(f1kaPromise);
console.log(f2kaPromise);
f1kaPromise.then(function(data)
{
    console.log(data+"");
})
f1kaPromise.catch(function(error)
{
    console.log(error);
})

f2kaPromise.then(function(data)
{
    console.log(data+"");
})
f2kaPromise.catch(function(error)
    {
        console.log(error);
    })
console.log("After");