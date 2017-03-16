console.time('init');

const electron = require('electron');
const {app, BrowserWindow, Menu, protocol, ipcMain} = require('electron');
const log = require('electron-log');
const {autoUpdater} = require("electron-updater");
const {dialog} = require('electron'); //dialoge test

//-------------------------------------------------------------------
// Logging
//
// THIS SECTION IS NOT REQUIRED
//
// This logging setup is not required for auto-updates to work,
// but it sure makes debugging easier :)
//-------------------------------------------------------------------
autoUpdater.logger = log;
autoUpdater.logger.transports.file.level = 'info';
log.info('App starting...');

// stop the fuckin update
autoUpdater.autoDownload = false;
// autoUpdater.autoDownload = true;

// console.log('#3' + autoUpdater.checkForUpdates); //return promise code


//-------------------------------------------------------------------
// Open a window that displays the version
//
// THIS SECTION IS NOT REQUIRED
//
// This isn't required for auto-updates to work, but it's easier
// for the app to show a window than to have to click "About" to see
// that updates are working.
//-------------------------------------------------------------------
let win;

function sendStatusToWindow(text) {
  log.info(text);
  win.webContents.send('message', text);
}



function createDefaultWindow(_width, _height) {

  console.log(_width);
  console.log(_height);

  win = new BrowserWindow({ 
    backgroundColor: '#ffffff',
    // width:800,
    // height: 650,
    show: false,
    minWidth: 800,
    minHeight: 650,
    // autoHideMenuBar : true,
    center: true
  });
 
  win.maximize(true);
  win.once('ready-to-show', () => {
    
    win.show();
  });

  // win.webContents.openDevTools();

  win.on('closed', () => {
    win = null;
  });

  win.loadURL(`file://${__dirname}/index.html#v${app.getVersion()}`);
  console.log(app.getVersion());
  win.webContents.openDevTools();

  
  // this dialoge open the file explorer
  // dialog.showOpenDialog({ 
  //   properties: [ 'openFile' ] }, function ( filename ) {
  //     console.log( 'The first dialog is Open' );
  //   }
  // );


  // Ask user to update the app
  // dialog.showMessageBox({
  //   type: 'question',
  //   buttons: ['Install and Relaunch', 'Later'],
  //   defaultId: 0,
  //   message: 'A new version of ' + app.getName() + ' has been downloaded',
  //   detail: 'It will be installed the next time you restart the application'
  // }, response => {
  //   if (response === 0) {
  //     setTimeout(() => autoUpdater.quitAndInstall(), 1);
  //   }
  // });




  return win;
}



autoUpdater.on('checking-for-update', () => {
  sendStatusToWindow('Checking for update...');
})
autoUpdater.on('update-available', (ev, info) => {
  sendStatusToWindow('Update available.');
})
autoUpdater.on('update-not-available', (ev, info) => {
  sendStatusToWindow('Update not available.');
})
autoUpdater.on('error', (ev, err) => {
  sendStatusToWindow('Error in auto-updater.');
})
autoUpdater.on('download-progress', (ev, progressObj) => {
  sendStatusToWindow('Download progress...');
})
autoUpdater.on('update-downloaded', (ev, info) => {
  sendStatusToWindow('Update downloaded; will install in 5 seconds');
});


app.on('ready', function() {
  const {width, height} = electron.screen.getPrimaryDisplay().workAreaSize
  createDefaultWindow(width, height);
});

app.on('window-all-closed', () => {
  app.quit();
});

//-------------------------------------------------------------------
// Auto updates
//
// For details about these events, see the Wiki:
// https://github.com/electron-userland/electron-builder/wiki/Auto-Update#events
//
// The app doesn't need to listen to any events except `update-downloaded`
//
// Uncomment any of the below events to listen for them.  Also,
// look in the previous section to see them being used.
//-------------------------------------------------------------------



autoUpdater.on('checking-for-update', () => {
});

autoUpdater.on('update-available', (ev, info) => {
  console.log('The Version ' + ev.version + ' Is ready');
  win.webContents.send('update-ready', 'The Version ' + ev.version + ' Is ready');
});

// ok if the user seect to download the update from the renderer process
ipcMain.on('download', (event, arg) => {  

  console.log(arg);
  if(arg == 1){
    autoUpdater.downloadUpdate();
  }

});

autoUpdater.on('update-not-available', (ev, info) => {
});

autoUpdater.on('error', (ev, err) => {
});

autoUpdater.on('download-progress', (ev, progressObj) => {
  console.log(ev.percent);
  // sendMsgForProgress (ev.percent);
  win.webContents.send('progress-info', ev.percent);
});


// when the programme is downloaded cal this event
autoUpdater.on('update-downloaded', (ev, info) => {
  // Wait 5 seconds, then quit and install
  // In your application, you don't need to wait 5 seconds.
  // You could call autoUpdater.quitAndInstall(); immediately

  // tell the render pr that the The download has finish
  win.webContents.send('download-complite', 'The download has finish');


  // Ask user to update the app
  // dialog.showMessageBox({
  //   type: 'question',
  //   buttons: ['Install and Relaunch', 'Later'],
  //   defaultId: 0,
  //   message: 'A new version of ' + app.getName() + ' has been downloaded',
  //   detail: 'It will be installed the next time you restart the application'
  // }, response => {
  //   if (response === 0) {
  //     setTimeout(() => autoUpdater.quitAndInstall(), 1);
  //   }
  // });

})

app.on('ready', function()  {
  autoUpdater.checkForUpdates();
});



// ################# ipcMain #################


// sends msg to render process
function sendMsg2Render (_msg) {

  ipcMain.on('async-msg', (event, arg) => {  
    event.sender.send('async-msg-reply', _msg);
    
  });

}




ipcMain.on('start-the-instalation', (event, arg) => {  
  // console.log(arg);
  if(arg == 1){
    autoUpdater.quitAndInstall();
  }

});


setTimeout(function() {
  
}, 5000);


console.timeEnd('init');