'use strict';

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const Menu = require('menu');
const Tray = require('tray');

app.on('window-all-closed', function() {
  app.quit();
});

app.on('ready', function() {
    var mainWindow = new BrowserWindow({
        width: 700,
        height: 500,
        center: true,
        title: "Life"
    });

    var menu = Menu.buildFromTemplate([
        {
            label: "React Example",
            submenu: [{
                label: 'Debug',
                accelerator: 'Shift+CmdOrCtrl+D',
                click: function() {
                    BrowserWindow.getFocusedWindow().toggleDevTools();
                }
            }]
        }
    ]);
    Menu.setApplicationMenu(menu);

    mainWindow.loadURL('file://' + __dirname + '/index.html');
    //mainWindow.webContents.openDevTools();
    mainWindow.on('closed', function() {
        mainWindow = null;
    });
});

