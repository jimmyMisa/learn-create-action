var fs = require("fs");
var path = require("path");

var core = require("@actions/core");
var github = require("@actions/github");

var name = core.getInput("who-to-greet");
console.log(`Hello ${name}`);

var token = core.getInput("token");
var title = core.getInput("title");
var body = core.getInput("body");
var assignees = core.getInput("assignees");
assignees = assignees.split("\n");

var octokit = new github.Github(token);

var response = octokit.issues.create({
	/*owner:github.context.repo.owner,
	repo:github.context.repo.repo,*/
	...github.context.repo,
	title,
	body,
	assignees,
});

var time = new Date();
/*core.setOutput("time", time.toTimeString());
*/core.setOutput("time", JSON.stringify(response.data));

/*console.log(JSON.stringify(github, null, "\t"));
 */
/*if(3 == 1 + 2){
	core.setFailed("Error required")
}*/

/*var rp = path.resolve("./")
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
});*/
