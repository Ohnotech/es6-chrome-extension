'use strict';

try {
    (async () => {
        const src = chrome.runtime.getURL("content/modules.js");
        import(src).then((jsModule => {
            console.log("jsModules loaded", jsModule);
            Promise.all([
                import('./alert-module.js'),
                import('./log-module.js')
            ]).then(([
                {alertMessage}, 
                {logMessage}
            ]) => {
                console.log("alertMessage, logMessage module loaded");

                chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
                    if (request.message) {
                        
                        console.log(` -----Message received from popup.js:, ${request.message}`);
                        if(request.message === "log-message")
                            logMessage("Log message in content.js");
                        else if(request.message === "alert-message")
                            alertMessage("Alert message in content.js");
            
                        sendResponse({
                            received: true
                        });
                    }
                });
            })
        }))

    })();
    console.log("content loaded");
} catch (error) {
    console.error(error);
}