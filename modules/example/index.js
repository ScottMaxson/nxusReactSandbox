import {application, NxusModule} from 'nxus-core'
import {router} from 'nxus-router'
import {templater} from 'nxus-templater'
import {clientjs} from 'nxus-clientjs'

export default class Example extends NxusModule {
  constructor() {
    super()

    router.route('/', ::this._example)

    templater.templateDir(__dirname+'/templates', 'page')

    router.staticRoute('/js-deps', __dirname+"/../../bower_components")

    clientjs.includeScript('example', __dirname+"/components/exampleComponent.html")
    clientjs.includeScript('example', __dirname+"/components/exampleJavascript.js")
    clientjs.includeScript('example', __dirname+"/components/react-example.js")
  }

  async _example(req, res) {
    res.send(await templater.render('example'))
  }
}