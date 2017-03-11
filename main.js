
const electron = require('electron');
const {app, BrowserWindow} = electron;




app.on('ready', () => {
  let win = new BrowserWindow({
    width:800,
    height: 600
    // icon: __dirname + '/resurces/icons/001-credit-card.ico'
  });
  win.loadURL(`file://${__dirname}/index.html`);
  win.webContents.openDevTools();
  //  win.setMenu(null); //afto kanei hide to menu bar

});