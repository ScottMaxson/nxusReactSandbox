
import chai from 'chai'
chai.should()

import {startTestServer, requestRaw} from 'nxus-tester'

function testRunner(testServer) {
    let opts = {DEBUG:"nxus:*"}
    if(process.env['NXUS_STORAGE__CONNECTIONS__DEFAULT__URL_URI'])
      opts['nxus_storage__connections__default__url'] = process.env['NXUS_STORAGE__CONNECTIONS__DEFAULT__URL_URI']
    return startTestServer('index.js', opts)
}

export {testRunner, requestRaw}