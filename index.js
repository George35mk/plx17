// init the select
$(document).ready(function() {

    $('select').material_select();


    // init the modal on new project
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();

});

const electron = require('electron');
const BrowserWindow = require('electron').remote.BrowserWindow;
const app = require('electron').remote.app ;
const autoUpdater = require("electron").remote.autoUpdater;

// console.log(autoUpdater);


// const feedURL = 'https://github.com/George35mk/plx17/releases/download/1.0.1/v-1.0.1.zip';

const appVersion = require('./package.json').version;
const os = require('os').platform();



// get the OS and the version of the app
function getOSandVersion (arguments) {
  console.log('The OS is : ' + os); // win32
  console.log('The App Version is : ' + appVersion); // 1.0.0
}

// the name in package.json
function getAppName (arguments) {
  console.log(app.getName());
}

// get the defalt path name
function getPath (arguments) {
  let p = app.getPath('documents');
  console.log(p);

  // app.setPath(name, path);
}

getPath();
// isometric3d


function getTheVersion (arguments) {
  const v = app.getVersion();
  console.log(v);
}



// var b = document.getElementById('');

// Initiate the Tzamia Module
var $ = jQuery;

var mod = require('./module');
mod.init($);



$( "#push" ).click(function() {
    mod.alertFromModule();
});