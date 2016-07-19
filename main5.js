const exec = require('child_process').exec;

const child = exec('dir h*',
    (error, stdout, stderr) => {
        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
        if (error !== null) {
            console.log(`exec error: ${error}`);
        }
console.log("---");
console.log("cpus : ");
const numCPUs = require('os').cpus().length;
console.log("cpus : "+numCPUs);


});


console.log("---");
console.log("cpus : ");
const numCPUs = require('os').cpus().length;
console.log("cpus : "+numCPUs);
