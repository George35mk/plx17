console.log('upddater.js is loaded');

const electron2 = require('electron');
const BrowserWindow2 = require('electron').remote.BrowserWindow;
const app2 = require('electron').remote.app ;
const autoUpdater2 = require("electron").remote.autoUpdater;
const log2 = require('electron-log');
log2.appName = 'isometric3d';

console.log(autoUpdater2);
console.log(log2);

autoUpdater2.logger = log2;
autoUpdater2.logger.transports.file.level = 'info';
log2.info('App starting...');


function sendStatusToWindow2(text) {
  log2.info(text);
  // win.webContents.send('message', text);
  alert();
}


autoUpdater2.on('checking-for-update', () => {
  sendStatusToWindow2('Checking for update...');
  console.log('checking-for-update');
  log2.info('checking-for-update');
  alert('check');
})
autoUpdater2.on('update-available', (ev, info) => {
  sendStatusToWindow2('Update available.');
  console.log('update is available :)');
  alert('available');
  
})
autoUpdater2.on('update-not-available', (ev, info) => {
  sendStatusToWindow2('Update not available.');
  console.log('update is not available :(');  
  alert('not available');
  
})
autoUpdater2.on('error', (ev, err) => {
  sendStatusToWindow2('Error in auto-updater.');
  alert('error');
  
})
autoUpdater2.on('download-progress', (ev, progressObj) => {
  sendStatusToWindow2('Download progress...');
  alert('progress..');
  
})
autoUpdater2.on('update-downloaded', (ev, info) => {
  sendStatusToWindow2('Update downloaded; will install in 5 seconds');
  alert('download complete');
  
});



autoUpdater2.on('update-downloaded', (ev, info) => {
  // Wait 5 seconds, then quit and install
  // In your application, you don't need to wait 5 seconds.
  // You could call autoUpdater.quitAndInstall(); immediately
  setTimeout(function() {
    autoUpdater2.quitAndInstall();  
  }, 5000)
})

app2.on('ready', function()  {
  autoUpdater2.checkForUpdates();
});






