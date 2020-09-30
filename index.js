'use strict';

// Config for heroku, which doesn't allow setting lowercase env vars
// via aliases for add-on services (mongodb in this case)
let nxusDB = process.env['NXUS_STORAGE__CONNECTIONS__DEFAULT__URL_URI'];
if (nxusDB) {
  process.env['nxus_storage__connections__default__url'] = nxusDB;
}

if(process.env.NODE_ENV != 'production') {
  require('babel-register')({})
} else {
  process.env['modulesDir'] = __dirname+"/lib"
} 

var application = require('nxus-core').application

//application.config['worker_queue'].redis_url = process.env.REDIS_URL || application.config['worker_queue'].redis_url

application.start()


