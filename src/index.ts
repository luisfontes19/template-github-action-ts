import * as core from '@actions/core';
//import * as github from '@actions/github';

const input = core.getInput('some-input');
core.setOutput("output", "Outputing something");
core.setFailed("Failing");