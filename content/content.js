'use strict';

// Content script is injecting a script with ES6 module support into the current page
// const script = document.createElement('script')
// script.setAttribute('type', 'module')
// script.setAttribute('src', chrome.runtime.getURL('/content/content-main.js'))
// const head = document.head || document.getElementsByTagName('head')[0] || document.documentElement
// head.insertBefore(script, head.lastChild)

try {
    chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
        if (request.message) {
            
            console.log('Message received from popup.js:', request.message);

            (async () => {
                const src = chrome.runtime.getURL("content/content-module.js");
                import(src).then((jsModule => {
                    if(request.message === "log-message")
                        jsModule.logMessage("Log message in content.js");
                    else if(request.message === "alert-message")
                        jsModule.alertMessage("Alert message in content.js");
                }))

            })();

            sendResponse({
                received: true
            });
        }
    });

    console.log("content loaded");
} catch (error) {
    console.error(error);
}