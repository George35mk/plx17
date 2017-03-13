const electron = require('electron');
const BrowserWindow = require('electron').remote.BrowserWindow;
const app = require('electron').remote.app ;
const autoUpdater = require("electron").remote.autoUpdater;

console.log(autoUpdater);


// const feedURL = 'https://github.com/George35mk/plx17/releases/download/1.0.1/v-1.0.1.zip';

const appVersion = require('./package.json').version;
const os = require('os').platform();


console.log('The OS is : ' + os); // win32
console.log('The App Version is : ' + appVersion); // 1.0.0

console.log(app.getName());

