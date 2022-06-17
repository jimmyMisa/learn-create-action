var core = require("@actions/core");
var github = require("@actions/github");

var name = core.getInput("who-to-greet");
console.log(`Hello ${name}`);

var time = new Date();
core.setOutput("time", time.toTimeString());

/*if(3 == 1 + 2){
	core.setFailed("Error required")
}*/
