import { addMessageToBody } from '../common.js'

const mButton = document.getElementById('my-button');
mButton.addEventListener('click', () => {
  addMessageToBody();
  chrome.tabs.query({ active: true, lastFocusedWindow: true })
    .then(([tab]) => {
      chrome.scripting.executeScript(
        {
          target: {tabId: tab.id},
          files: ['/content/app.js'],
          // function: () => {}, // files or function, both do not work.
        })    
    })
});
