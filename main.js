const { app, BrowserWindow } = require('electron');


function createWindow() {
    const win = new BrowserWindow({
        width: 720,
        height: 420,
        webPreferences: {
            nodeIntegration: true
        },
        resizable: false
    });

    win.loadFile('index.html');
}

app.on('ready', createWindow);