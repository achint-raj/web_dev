//given an array arr = [audio,video,image,software,documents,applications,others]
//make folder for each element in the given array and inside each folder make 4 files of that type

let fs = require("fs");
let path = require("path");

let arr = ['Audio','Video','Software','Documents','Applications','Others'];
let nameArr = ['abc','def','ghi','jkl'];
let extArr = ['.mp3','.mp4','.exe','.pdf','.apk','.rar'];

let organisepath = path.join(__dirname,"Organise");
if(!fs.existsSync(organisepath))
fs.mkdirSync(organisepath);

for(let i=0;i<arr.length;i++){
    let folderkapath = path.join(organisepath,arr[i]);
    if(!fs.existsSync(folderkapath))
    fs.mkdirSync(folderkapath);
    for(let j=0;j<nameArr.length;j++){
        let filename = nameArr[j]+extArr[i];
        let filekapath = path.join(folderkapath,filename);
        fs.writeFileSync(filekapath,"");
    }

}