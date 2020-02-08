const os = require('os');
const fs = require('fs');
const mi = require('./mito.js');

let cpu = os.cpus();
let sistema = os.platform();
let usuario = os.hostname();

let cpu_string = JSON.stringify(cpu);
/*
fs.appendFile('testcode.txt', `informacion del cpu ${cpu_string}`,function(error){
    if(error){
        console.log('error al crear archivo')
    }
});*/

setTimeout(()=>{
    console.log("termine")
},2000);


