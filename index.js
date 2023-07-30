
const fs=require('fs');
let info="Features of NodeJS architecture. The NodeJS runs event-driven operations, where each task is triggered by the use of events which deploys a callback function. The NodeJS runtime is an asynchronous operation and doesn't block other tasks while enabling a smooth operation.";

// //------------------write file-------------
fs.writeFile('nodejs_achitecture.txt',info,function(err){
    if(err){
        console.log("Writing Error!");
    }else{
        console.log("Writing Successfully!");
    }
});


// //---------------------Readfile------------------
fs.readFile('nodejs_achitecture.txt','utf8',function(err,data){
    if(err){
        console.log("read error");
    }else{
        console.log("Read Successfully!");
    }

    console.log(data);
});

//---------------ADD information and Read information---------------

let addContent="(1)High Performance (2)Scalability (3)Easy to Learn Reduces Loading time using caching (4) Improves Response time and boosts performance (5) Large Community Support (6) Cost-Effective (7)Extensibility";
fs.appendFile('nodejs_achitecture.txt',addContent,function(err){
    if(err){
        console.log("Appended Error");
    }else{
        console.log("Appended Successfully!");
    }
});

fs.readFile('nodejs_achitecture.txt','utf-8',function(err,data){
    if(err){
        console.log("Read error");
    }else{
        console.log("read Successfully!");
    }
    console.log(data);
});

//-----------------------deletation the file------------------
// fs.unlink('nodejs_achitecture.txt',function(err){
//     if(err){
//         console.log("deleted error");
//     }else{
//         console.log("deleted Successfully!");
//     }
// });