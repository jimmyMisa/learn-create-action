var fs = require('fs');
var path = require("path");

var core = require("@actions/core");
var github = require("@actions/github");

var name = core.getInput("who-to-greet");
console.log(`Hello ${name}`);

var time = new Date();
core.setOutput("time", time.toTimeString());


console.log(JSON.stringify(github, null, "\t"));

/*if(3 == 1 + 2){
	core.setFailed("Error required")
}*/

var rp = path.resolve("./")
console.log(rp)

fs.readdir(rp, function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    //listing all files using forEach
    files.forEach(function (file) {
        // Do whatever you want to do with the file
        console.log(file); 
    });
});
