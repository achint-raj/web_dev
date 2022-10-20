//console.log("Hello World");
//let inputArr = process.argv;
//console.log(inputArr);
//['pathtonode','pathtofile','input_passed_in_terminal']
//let input = process.argv[2];
//console.log(input);

let fs = require("fs");
let path = require("path");
let folderpath = process.argv[2];//input deta hai

 let folderexists = fs.existsSync(folderpath);
 let extensions = {
    Audio:[".mp3"],
    Video:[".mp4",".mkv"],
    Document:[".doc",".xlsx",".pdf",".txt"],
    Image:[".jpeg",".jpg",".png",".gif"],
    Software:[".exe"]

}
 if(folderexists){
     //we will code
     //console.log("path is valid");
let files = fs.readdirSync(folderpath);
for(let i=0;i<files.length;i++){
    let ext = path.extname(files[i]);
    let nameoffolder = giveFolderName(ext);
    //console.log("Ext--", ext,"Folder--", nameoffolder)
    //console.log(ext);
    let pathoffolder = path.join(folderpath,nameoffolder);
    let exist = fs.existsSync(pathoffolder);
    if(exist){
        moveFile(folderpath,pathoffolder,files[i]);
    }else
    {
        fs.mkdirSync(pathoffolder);
        moveFile(folderpath,pathoffolder,files[i]);
    }
}
console.log(files);
 }
 else {
     console.log("please enter a valid path!!");
 }
 

 function giveFolderName(ext){
for(let key in extensions){
    let extArr = extensions[key];
    for(let i=0;i<extArr.length;i++){
        if(extArr[i] == ext)
        return key;
    }
}
return 'Others';
 }

 function moveFile(folderpath,pathoffolder,fileName){
     let sourcepath = path.join(folderpath,fileName);
     let destinationpath = path.join(pathoffolder,fileName);
     fs.copyFileSync(sourcepath,destinationpath);
     fs.unlinkSync(sourcepath);
 }