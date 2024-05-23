// import { logMessage } from './background-module.js'
// logMessage('Hello World from Background using modules')


chrome.runtime.onInstalled.addListener(() => {
    console.log("Extension installed");
});