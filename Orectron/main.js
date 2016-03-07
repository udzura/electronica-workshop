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
        width: 600,
        height: 300,
        center: true,
        title: "Remote Demo だぎゃあ",
    });

    var menu = Menu.buildFromTemplate([
        {
            label: "おっす",
            submenu: [{
                label: 'やるぞ！',
                accelerator: 'Shift+CmdOrCtrl+D',
                click: function() {
                    BrowserWindow.getFocusedWindow().toggleDevTools();
                }
            }]
        }
    ]);
    Menu.setApplicationMenu(menu);

    var contextMenu = Menu.buildFromTemplate([
        { label: 'Item1', type: 'radio' },
        { label: 'Item2', type: 'radio' },
        { label: 'Item3', type: 'radio', checked: true },
        { label: 'Item4', type: 'radio' }
    ]);
    var icon = new Tray(__dirname + '/images/udzura.jpg');
    icon.setToolTip("テスト");
    icon.setContextMenu(contextMenu);


    mainWindow.loadURL('file://' + __dirname + '/index.html');
    //mainWindow.webContents.openDevTools();
    mainWindow.on('closed', function() {
        mainWindow = null;
    });
});

