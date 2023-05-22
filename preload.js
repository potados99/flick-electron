const electron = require('electron');

function init() {
  // Show title bar because it is running on Electron.
  window.onload = () => {
    document.querySelector('x-title').setAttribute('show', 1);
    document.querySelector('html').className = 'bordered';
  }

  // When document has loaded, initialise
  document.onreadystatechange = (event) => {
    if (document.readyState === "complete") {
      handleWindowControls();
    }
  };

  window.onbeforeunload = (event) => {
    /* If window is reloaded, remove win event listeners
    (DOM element listeners get auto garbage collected but not
    Electron win listeners as the win is not dereferenced unless closed) */
    electron.ipcRenderer.removeAllListeners('window-control');
  }

  function handleWindowControls() {
    document.getElementById('min-button').addEventListener("click", event => {
      electron.ipcRenderer.send('window-control', 'minimize');
    });

    document.getElementById('close-button').addEventListener("click", event => {
      electron.ipcRenderer.send('window-control', 'close');
    });
  }
}

setTimeout(() => {
  init()
}, 0);
