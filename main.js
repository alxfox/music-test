const { app, BrowserWindow, Menu } = require('electron');
const menu = require('./menu');
function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    },
    resizable: false
  });
  win.loadFile('index.html');
}
app.on('ready', createWindow);