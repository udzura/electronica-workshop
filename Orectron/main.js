'use strict';

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

app.on('window-all-closed', function() {
  app.quit();
});

app.on('ready', function() {
    var mainWindow = new BrowserWindow({
        width: 600,
        height: 300,
        center: true,
        title: "Remote Demo だぎゃあ",
    });

    mainWindow.loadURL('file://' + __dirname + '/index.html');
    //mainWindow.webContents.openDevTools();
    mainWindow.on('closed', function() {
        mainWindow = null;
    });
});

