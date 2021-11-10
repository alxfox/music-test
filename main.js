const { app, BrowserWindow, Menu, net } = require("electron");
const path = require("path");
const fs = require("fs");
function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, './preload.js'),
      nodeIntegration: true,
    },
    resizable: false,
  });
  win.loadFile("index.html");
}
app.on("ready", createWindow);
