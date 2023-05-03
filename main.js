const {app, BrowserWindow, ipcMain} = require('electron');
const path = require('path');

const createWindow = async () => {
  const win = new BrowserWindow({
    width: 350,
    height: 550,
    frame: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    }
  });

  await win.loadURL('https://drop.potados.com');

  ipcMain.on('window-control', (event, args) => {
    win[args]();
  });
}

app.whenReady().then(createWindow);
