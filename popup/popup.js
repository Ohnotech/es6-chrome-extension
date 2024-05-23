'use strict';

document.addEventListener('DOMContentLoaded', function () {
    var sendMessageButton = document.getElementById('send-message');
    sendMessageButton.addEventListener('click', sendMessageToContentScript);
});

async function sendMessageToContentScript() {
    try {
        chrome.tabs.query({ active: true, lastFocusedWindow: true })
            .then(([tab]) => {
                chrome.tabs.sendMessage(
                    tab.id, 
                    { message: 'Hello from popup.js!' },
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
