var exec = require('child_process').exec;

const GIT_INIT = "git init";
const GIT_ADD_ALL = "git add --all";
const GIT_ADD = "git add";
const GIT_COMMIT = "git commit";
const GIT_STATUS = "git status";
const GIT_DIFF = "git diff";

// Distant
const GIT_REMOTE = "git remote";
const GIT_REMOTE_ADD = "git remote add";
const GIT_SSH_PREFIX = "ssh://git@github.com";
const GIT_PUSH = "git push";
const GIT_PULL = "git pull";
// 

function ExecCommand(cmd){
	exec(cmd,"SIGTERM", function(error, stdout, stderr) {
	  // command output is in stdout
	  console.log(`stdout: ${stdout}`);
	        console.log(`stderr: ${stderr}`);
	        if (error) {
	            console.log(`exec error: ${error}`);
	        }
	});
}

function _init(){
	var cmd = "";

	cmd += GIT_INIT;
	ExecCommand(cmd);
}

function _status(){
	var cmd = "";

	cmd += GIT_STATUS;
	ExecCommand(cmd);
}

function _diff(){
	var cmd = "";

	cmd += GIT_DIFF;
	ExecCommand(cmd);
}

function _addAll(){
	var cmd = "";

	cmd += GIT_ADD_ALL;
	ExecCommand(cmd);
}

function _add(files){
	var cmd = "";

	cmd += GIT_ADD + " " + files.join(" ");
	ExecCommand(cmd);
}

function _addFile(file){
	var cmd = "";

	cmd += GIT_ADD + " " + file;
	ExecCommand(cmd);
}

function _commit(args,message){
	var cmd = "";

	cmd += GIT_COMMIT + " " + args.join("") + ' "' + message + '"'; 
	ExecCommand(cmd);
}

function _remoteAdd(alias,account,repository){
    var cmd = "";

    cmd += GIT_REMOTE_ADD + " " + alias + " " + GIT_SSH_PREFIX + "/" + account + "/" + repository + ".git";
    ExecCommand(cmd);
}

function _push(args,repo,branch){
	var cmd = "";

	cmd += GIT_PUSH + " " + args.join("") + " " + repo + " " + branch;
	ExecCommand(cmd);
}

_init();
_status();
_diff();
_addAll();
_commit(['-am'],"commit all");

//_remoteAdd("lolo","siu-lim-studio","gitCommandExample");
//_push(["-f"],"lolo","master");
