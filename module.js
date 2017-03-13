let $;

function init (_$) {
  // body

  $ = _$;
}


function alertFromModule (argments) {
  alert( "Hello from module 3213" );
}

module.exports.alertFromModule = alertFromModule;
module.exports.init = init;