// let fs = require('fs');
// let f1kaPromise = fs.promises.readFile("f1.txt");
// f1kaPromise.then(function(data)
// {
//     console.log(data+"");
//     let f2kaPromise = fs.promises.readFile("f2.txt");
//     return f2kaPromise;
// })
// .then(function(data)
// {
//     console.log(data+"");
// }).catch(function(error)
// {
//     console.log(error);
// })

  

let fs = require('fs');

let arr = ['./f1.txt','./f2.txt','./f3.txt','./f4.txt','./f5.txt']

let filePromise = fs.promises.readFile(arr[0]);


for(let i = 1;i < arr.length;i++){
   
    filePromise = filePromise.then(function(data){
        console.log(data+"");
        let nextfilepromise = fs.promises.readFile(arr[i]);
        return nextfilepromise;
    })
}

filePromise.then(function(data){
    console.log(data+"");
})