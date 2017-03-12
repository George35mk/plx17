// const electron = require('electron');
// const app = electron.app;
// const BrowserWindow = electron.BrowserWindow;
// // const autoUpdater = require("electron-updater").autoUpdater

// // console.log(autoUpdater);

// const feedURL = 'https://github.com/George35mk/plx17/releases/download/1.0.1/v-1.0.1.zip';



// var log = require('electron-log');


const appVersion = require('./package.json').version;
const os = require('os').platform();


console.log('The OS is : ' + os); // win32
console.log('The App Version is : ' + appVersion); // 1.0.0

const autoUpdater = require("electron-updater").autoUpdater;
