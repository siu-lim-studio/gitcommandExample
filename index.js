var exec = require('child_process').exec;

// CREATE
const GIT_INIT = "git init";
const GIT_CLONE = "git clone";

// LOCAL CHANGES
const GIT_ADD_ALL = "git add --all";
const GIT_ADD = "git add";
const GIT_COMMIT = "git commit";
const GIT_STATUS = "git status";
const GIT_DIFF = "git diff";

// HISTORY
const GIT_LOG = "git log";
const GIT_BLAME = "git blame";

// BRANCHES AND TAGS
const GIT_BRANCH = "git branch";
const GIT_CHECKOUT = "git checkout";
const GIT_TAG = "git tag";

// UPDATE AND PUBLISH
const GIT_REMOTE = "git remote";
const GIT_REMOTE_ADD = "git remote add";
const GIT_REMOTE_SHOW = "git remote add";
const GIT_SSH_PREFIX = "ssh://git@github.com";
const GIT_PUSH = "git push";
const GIT_PUSH_TAGS = "git push --tags";
const GIT_PULL = "git pull";
const GIT_FETCH = "git fetch";

// CONFIG
const GIT_CONFIG = "git config";

// MERGE AND REBASE
const GIT_MERGE = "git merge";
const GIT_REBASE = "git rebase";
const GIT_MERGETOOL = "git mergetool";

// UNDO
const GIT_RESET = "git reset";
const GIT_REVERT = "git revert";


// Process 

function ExecCommand(cmd){
	exec(cmd, function(error, stdout, stderr) {
	  // command output is in stdout
	    if (error) {
	      console.log(`exec error: ${error}`);
	    }
	     console.log(`stdout: ${stdout}`);
	});
}


/*******************************************
   CREATE COMMANDS
*/

function _init(){
	var cmd = "";

	cmd += GIT_INIT;
	ExecCommand(cmd);
}

function _clone(url){
	var cmd = "";

	cmd += GIT_CLONE + " " + url;
	ExecCommand(cmd);
}

/********************************************
  LOCAL CHANGES COMMANDS
*/

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

function _addChangesInFile(file){
	var cmd = "";

	cmd += GIT_ADD + " -p " + file;
	ExecCommand(cmd);
}

function _commit(args,suffix){
	var cmd = "";

	cmd += GIT_COMMIT + " " + args.join("") + ' "' + suffix + '"'; 
	ExecCommand(cmd);
}

function _commitAll(message){
	var cmd = "";

	cmd += GIT_COMMIT + " -am" +' "' + message + '"'; 
	ExecCommand(cmd);
}

function _commitPrevious(message){
	var cmd = "";

	cmd += GIT_COMMIT + " -m" +' "' + message + '"'; 
	ExecCommand(cmd);
}

function _commitLast(message){
	var cmd = "";

	cmd += GIT_COMMIT + " -m" +' "' + message + '"'; 
	ExecCommand(cmd);
}

/***************************************************
   COMMIT HISTORY COMMANDS
*/
function _log(pretty){
	var cmd = "" , arg = "";
    if(pretty)
      arg = "--pretty=" + pretty;
	cmd += GIT_LOG + " " + arg; 
	ExecCommand(cmd);
}

function _stat(prettry){
	var cmd = "" , arg = "";
	if(pretty)
      arg = "--pretty=" + pretty;

	cmd += GIT_LOG + " --stat" + " " + arg; 
	ExecCommand(cmd);
}

function _logFile(file,pretty){
	var cmd = "" , arg = "";
    if(pretty)
     arg = "--pretty=" + pretty;    
	cmd += GIT_LOG + " -p " + file + " " + arg; 
	ExecCommand(cmd);
}

function _blame(file){
	var cmd = "";

	cmd += GIT_BLAME + " " + file; 
	ExecCommand(cmd);
}

/***********************************************************************
  BRANCH AND TAGS COMMANDS
*/
function _listBranches(){
	var cmd = "";
    
    cmd += GIT_BRANCH + " -av";

	ExecCommand(cmd);
}

function _createBranch(branch){
	var cmd = "";
    
    cmd += GIT_BRANCH + " " + branch;

	ExecCommand(cmd);
}

function _switchBranch(branch){
	var cmd = "";
    
    cmd += GIT_CHECKOUT + " " + branch;

	ExecCommand(cmd);
}

function _deleteBranch(branch){
	var cmd = "";
    
    cmd += GIT_BRANCH + " -d " + branch;

	ExecCommand(cmd);
}

function _markCurrentCommit(tag){
	var cmd = "";
    
    cmd += GIT_TAG + " " + tag;

	ExecCommand(cmd);
}

function _deleteTag(tag){
	var cmd = "";
    
    cmd += GIT_TAG + " -d " + tag;

	ExecCommand(cmd);
}

function _listTags(){
	var cmd = "";
    
    cmd += GIT_TAG + " -l";

	ExecCommand(cmd);
}

/**************************************************************
   
    UPDATE AND PUBLISH

*/
function _listRemotes(){
	var cmd ="";

	cmd += GIT_REMOTE + " -v";

	ExecCommand(cmd);
}

function _showRemote(remote){
	var cmd ="";

	cmd += GIT_REMOTE_SHOW + " " + remote;

	ExecCommand(cmd);
}

function _addRemote(remote,account,repository){
    var cmd = "";

    cmd += GIT_REMOTE_ADD + " " + alias + " " + GIT_SSH_PREFIX + "/" + account + "/" + repository + ".git";
    ExecCommand(cmd);
}

function _fetch(remote){
	var cmd = "";
	
	cmd += GIT_FETCH + " " + repo;
	ExecCommand(cmd);
}

function _pull(remote,branch){
	var cmd = "";
	var _args = args ? args:[''];

	cmd += GIT_PULL + " " + remote + " " + branch;
	ExecCommand(cmd);
}

function _pullWithRebase(remote,branch){
	var cmd = "";
	var _args = args ? args:[''];

	cmd += GIT_PULL + " --rebase " + remote + " " + branch;
	ExecCommand(cmd);
}

function _push(remote,branch){
	var cmd = "";

	cmd += GIT_PUSH + " " + remote + " " + branch;
	ExecCommand(cmd);
}

function _deleteBranchOnRemote(remote,branch){
	var cmd = "";

	cmd += GIT_BRANCH + " -dr" + remote + " " + branch;
	ExecCommand(cmd);
}

function _pushTags(){
	var cmd = "";

	cmd += GIT_PUSH + " --tags";
	ExecCommand(cmd);
}

/**********************************************************
  MERGE & REBASE
  
*/
function _mergeBranch(branch){
	var cmd = "";

	cmd += GIT_MERGE + " " + branch;
	ExecCommand(cmd);
}

function _rebaseBranch(branch){
	var cmd = "";

	cmd += GIT_REBASE + " " + branch;
	ExecCommand(cmd);
}

function _abortRebase(){
	var cmd = "";

	cmd += GIT_REBASE + " --abort";
	ExecCommand(cmd);
}

function _continueRebase(){
	var cmd = "";

	cmd += GIT_REBASE + " --continue";
	ExecCommand(cmd);
}

function _mergeTool(){
	var cmd = "";

	cmd += GIT_MERGETOOL;
	ExecCommand(cmd);
}

/*****************************************************

   UNDO
*/
function _discardLocalChanges(){
	var cmd = "";

	cmd += GIT_RESET + " --hard HEAD";
	ExecCommand(cmd);
}

function _discardLocalChangesInFile(file){
	var cmd = "";

	cmd += GIT_CHECKOUT + " HEAD " + file;
	ExecCommand(cmd);
}

function _revertCommit(commit){
	var cmd = "";

	cmd += GIT_REVERT + " " + commit;
	ExecCommand(cmd);
}

function _resetPreviousCommitAndDiscardChanges(commit){
	var cmd = "";

	cmd += GIT_RESET + " --hard " + commit;
	ExecCommand(cmd);
}

function _resetPreviousCommitAndPreserveChanges(commit){
	var cmd = "";

	cmd += GIT_RESET + " " + commit;
	ExecCommand(cmd);
}

function _resetPreviousCommitAndPreserveUncommitLocalChanges(commit){
	var cmd = "";

	cmd += GIT_RESET + " --keep " + commit;
	ExecCommand(cmd);
}


_commit(['-am'],"commit all");
_fetch([""],"lola");
_merge([""],"lola");
_status();
_diff();