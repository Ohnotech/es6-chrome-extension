'use strict';

document.addEventListener('DOMContentLoaded', function () {
    const logMessageButton = document.getElementById('log-message');
    logMessageButton.addEventListener('click', ()=>sendMessageToContentScript("log-message"));
    const alertMessageButton = document.getElementById('alert-message');
    alertMessageButton.addEventListener('click', ()=>sendMessageToContentScript("alert-message"));
});

async function sendMessageToContentScript(message) {
    try {
        chrome.tabs.query({ active: true, lastFocusedWindow: true })
            .then(([tab]) => {
                chrome.tabs.sendMessage(
                    tab.id, 
                    { message },
                    (response) => {
                        if(response.received)
                            window.close();
                    }
                );
            })
        console.log('Message sent to content.js');
    } catch (error) {
        console.error('Error sending message:', error);
    }
}
