const {app, BrowserWindow, ipcMain, Menu} = require('electron');
const path = require('path');

const createWindow = async () => {
  const win = new BrowserWindow({
    icon: 'icon.png',
    title: 'Flick',
    width: 350,
    height: 550,
    frame: false,

    transparent: true,

    webPreferences: {
      nodeIntegration: true,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    }
  });

  // 우클릭하면 나오는 컨텍스트 메뉴를 숨기기 위한 눈물겨운 노력...
  const WM_INITMENU = 0x0116;
  const menu = Menu.buildFromTemplate([]);

  win.hookWindowMessage(WM_INITMENU, () => {
    win.setEnabled(false);
    win.setEnabled(true);
    menu.popup();
  });

  await win.loadURL('https://flick.potados.com');

  ipcMain.on('window-control', (event, args) => {
    win[args]();
  });
}

app.whenReady().then(createWindow);
