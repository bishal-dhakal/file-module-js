const fs = require("fs");

//to create a folder
//fs.mkdirSync("file");

//to create a file
//fs.writeFileSync('file/file.txt','a content to a file.');

//fs.appendFileSync('file/file.txt',' more content to the file');

//const data = fs.readFileSync('file/file.txt',"utf8");

//console.log(data.toString())
//console.log(data)

//fs.renameSync('file/file.txt','file/new.txt');

//fs.unlinkSync('file/file.txt');

fs.rmdirSync("file");