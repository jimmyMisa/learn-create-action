var core = require("@actions/core");
var github = require("@actions/github");

var token = core.getInput("token");
var title = core.getInput("title");
var body = core.getInput("body");
var assignees = core.getInput("assignees");
assignees = assignees.split("\n");

async function run(){

    var octokit = new github.GitHub(token);

    var response = await octokit.issues.create({
        ...github.context.repo,
        title,
        body,
        assignees,
    });
    core.setOutput("issue", JSON.stringify(response.data));
}

run()
