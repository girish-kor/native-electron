const { app, BrowserWindow, ipcMain, shell } = require('electron');
const path = require('path');
const fs = require('fs');

const storeFile = () => path.join(app.getPath('userData'), 'store.json');

function readStore() {
  try {
    return JSON.parse(fs.readFileSync(storeFile(), 'utf-8'));
  } catch {
    return {};
  }
}

function writeStore(data) {
  fs.mkdirSync(path.dirname(storeFile()), { recursive: true });
  fs.writeFileSync(storeFile(), JSON.stringify(data), 'utf-8');
}

function createWindow() {
  const win = new BrowserWindow({
    width: 1024,
    height: 768,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      sandbox: true,
      nodeIntegration: false,
    },
  });

  if (!app.isPackaged) {
    win.loadURL('http://localhost:5173');
  } else {
    win.loadFile(path.join(__dirname, '..', 'dist', 'index.html'));
  }
}

ipcMain.handle('store:get', (_event, key) => {
  const data = readStore();
  return data[key] ?? null;
});

ipcMain.handle('store:set', (_event, key, value) => {
  const data = readStore();
  data[key] = value;
  writeStore(data);
});

ipcMain.handle('shell:openLink', (_event, url) => shell.openExternal(url));

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
