import { addMessageToBody, ExtensionStorage } from '../common.js'

const mButton = document.getElementById('here');
mButton.addEventListener('click', () => {
  chrome.tabs.query({ active: true, lastFocusedWindow: true })
    .then(([tab]) => {
      console.log(chrome.scripting, chrome.tabs.executeScript);
      chrome.scripting.executeScript(
        {
          target: {tabId: tab.id},
          files: ['/content/app.js'],
          // function: () => {}, // files or function, both do not work.
        })    
    })
});

const extensionStorage = new ExtensionStorage()
extensionStorage.getData().then(function (items) {
  console.log(items)
})
