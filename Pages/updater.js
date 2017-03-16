console.log('upddater.js is loaded');

const app = require('electron').remote.app ;
var {ipcRenderer, remote} = require('electron');  
var main = remote.require("./main.js");


// Send async message to main process
ipcRenderer.send('async-msg', 1);

// when window launch hide the download bth on index.js
$("#download").hide();


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




