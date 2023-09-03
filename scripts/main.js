const { app, BrowserWindow } = require('electron')
// app controls your application's event lifecycle.
// BrowserWindow creates and manages app windows.

// Just making sure things are running

(function () {
    console.log("Main is running")
})();

const createWindow = () => {
    const win = new BrowserWindow({
    width: 1920,
    height: 1080,
    webPreferences: {
        preload: path.join(__dirname, 'preload.js'),
        nodeIntegration: true}
})

// Load the index.html of the app.

win.loadFile('index.html')
}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
        }
    })
    })

    app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

