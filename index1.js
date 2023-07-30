const { log } = require('console');
const os=require('os');

//----------------operating System Name-------------------
console.log("OS Name:",os.type());

//----------------OS Release version------------------
console.log("OS Release:",os.release());