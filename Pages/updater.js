console.log('upddater.js is loaded');

// const electron2 = require('electron');
// const BrowserWindow2 = require('electron').remote.BrowserWindow;
const app = require('electron').remote.app ;
// const autoUpdater2 = require("electron").remote.autoUpdater;
// const log2 = require('electron-log');
// log2.appName = 'isometric3d';

// console.log(autoUpdater2);
// console.log(log2);

//  https://github.com/George35mk/plx17/releases/download/v2.0.4/isometric3d-Setup-2.0.4.exe
// var autoUpdater3 = require("electron").remote.autoUpdater;
// autoUpdater3.on("error", function(err) {
//   console.log(err);
// });

// var autoUpdater3 = require('electron').remote.autoUpdater;
// autoUpdater3.on("error", function(err, msg) {
//   console.log(msg); //print msg , you can find the cash reason.
// });
// autoUpdater3.setFeedUrl('https://github.com/atom/electron/releases/tag/v0.31.2');


// autoUpdater3.setFeedUrl('https://github.com/George35mk/plx17/releases/tag/v2.0.4');

// autoUpdater3.getFeedURL();
// autoUpdater2.checkForUpdates();

// let url = 'https://github.com/George35mk/plx17/releases/tag/v2.0.4';


// // ////////////////////

// const {autoUpdater} = require('electron');

//   const feedURL = 'C:\\Users\\p00009970\\Desktop\\update_test';
//   // autoUpdater.logger.error(); 
//   autoUpdater.setFeedURL(url,'https'); 


//   autoUpdater.on("error", function(err, msg) {
//     console.log(msg); //print msg , you can find the cash reason.
//   });

//   autoUpdater.on("update-available", function(err, msg) {
//     console.log(msg); //print msg , you can find the cash reason.
//     console.log('update is available');
//   });

//   let s = autoUpdater.getFeedURL();
//   console.log(s);
//   autoUpdater.checkForUpdates(); 






// autoUpdater2.logger = log2;
// autoUpdater2.logger.transports.file.level = 'info';
// log2.info('App starting...');


// function sendStatusToWindow2(text) {
//   // log2.info(text);
//   // win.webContents.send('message', text);
//   console.log(text);
// }


// autoUpdater2.on('checking-for-update', () => {
//   sendStatusToWindow2('Checking for update...');
//   console.log('checking-for-update');
//   log2.info('checking-for-update');

// })
// autoUpdater2.on('update-available', (ev, info) => {
//   sendStatusToWindow2('Update available.');
//   console.log(ev);
//   // console.log(ev.);
// })
// autoUpdater2.on('update-not-available', (ev, info) => {
//   sendStatusToWindow2('Update not available.');
//   console.log('update is not available :(');  
// })
// autoUpdater2.on('error', (ev, err) => {
//   sendStatusToWindow2('Error in auto-updater.');
//   console.log('error');
  
// })
// autoUpdater2.on('download-progress', (ev, progressObj) => {
//   sendStatusToWindow2('Download progress...');
//   console.log('progress..');
  
// })
// autoUpdater2.on('update-downloaded', (ev, info) => {
//   sendStatusToWindow2('Update downloaded; will install in 5 seconds');
//   console.log('download complete');
  
// });



// autoUpdater2.on('update-downloaded', (ev, info) => {
//   // Wait 5 seconds, then quit and install
//   // In your application, you don't need to wait 5 seconds.
//   // You could call autoUpdater.quitAndInstall(); immediately
//   setTimeout(function() {
//     autoUpdater2.quitAndInstall();  
//   }, 5000)
// })

// app2.on('ready', function()  {
//   autoUpdater2.checkForUpdates();
// });


// $( document ).ready(function() {
//     autoUpdater2.checkForUpdates();
// });

// setInterval(myMethod, 5000);

// function myMethod( )
// {
//   //this will repeat every 5 seconds
//   //you can reset counter here

//   sendStatusToWindow2();
// }




var {ipcRenderer, remote} = require('electron');  
var main = remote.require("./main.js");


// Send async message to main process
ipcRenderer.send('async-msg', 1);




ipcRenderer.on('async-msg-reply', (event, arg) => { 
  console.log(arg);
  
  if(arg == 'Update available'){
    alert('Update available');
  } 
});

ipcRenderer.on('update-ready', (event, arg) => { 
  
  if (arg) {
    console.log(arg);
    $("#download").show();
  }
});

ipcRenderer.on('download-complite', (event, arg) => { 
  
  if (arg) {
    console.log(arg);
    // $("#download").show();
  }
});


ipcRenderer.on('progress-info', (event, arg) => { 
  
  if (arg) {
    console.log(arg);
  }
});




$( "#start_the_instalation" ).click(function() {
  ipcRenderer.send('start-the-instalation', 1);
});

$( "#download" ).click(function() {
  ipcRenderer.send('download', 1);
});




