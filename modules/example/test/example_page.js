
'use strict';

import {testRunner, requestRaw} from '../../../test/utils'

describe('Error pages', () => {
  before(() => {
    return testRunner()
  })
  it('displays the example page', async () => {
    let res = await requestRaw.get({url: '/', followRedirect: false})
    res.statusCode.should.equal(200)
    res.body.should.contain("Hello")
  })
})