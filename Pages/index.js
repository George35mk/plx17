// init the select
$(document).ready(function() {

    $('select').material_select();


    // init the modal on new project
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();

});



// const feedURL = 'https://github.com/George35mk/plx17/releases/download/1.0.1/v-1.0.1.zip';

const appVersion = require('./package.json').version;
const os = require('os').platform();



// get the OS and the version of the app
function getOSandVersion () {
  console.log('The OS is : ' + os); // win32
  console.log('The App Version is : ' + appVersion); // 1.0.0
}
getOSandVersion ();


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

// getPath();
// isometric3d


function getTheVersion () {
  const v = app.getVersion();
  console.log('The App Version is = ' + v);
}
// getTheVersion();


// var b = document.getElementById('');

// Initiate the Tzamia Module
var $ = jQuery;

var mod = require('./module');
mod.init($);



$( "#push" ).click(function() {
    mod.alertFromModule();
});






// this code fix the canvas 4px shit padding or margin
$("#tab_home").click(function () {
    $("body").css("overflow", "auto");
});

$("#tab_design").click(function () {
    // alert('The overflow on desighn tab is hidden ok ?');
    $("body").css("overflow", "hidden");
});

$("#tab_exports").click(function () {
    $("body").css("overflow", "auto");
});