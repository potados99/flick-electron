const {app, BrowserWindow} = require('electron');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 500,
    height: 800,
  });

  win.loadURL('https://drop.potados.com');
}

console.log('hello!');

app.whenReady().then(createWindow);
