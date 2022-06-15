var core = require("@actions/core");
var github = require("@actions/github");

var token = core.getInput("token");
var title = core.getInput("title");
var body = core.getInput("body");
var assignees = core.getInput("assignees");
assignees = assignees.split("\n");

async function run(){
    try{
        var octokit = new github.getOctokit(token);

        var response = await octokit.rest.issues.create({
            ...github.context.repo,
            title,
            body,
            assignees,
        });
        core.setOutput("issue", JSON.stringify(response.data));
    }
    catch(error){
        core.setFailed(error.message)
    }
}

run()

