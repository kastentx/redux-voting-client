import jsdom from 'jsdom'

const doc = jsdom.jsdom('<!DOCTYPE HTML><html><body></body></html>')
const win = doc.defaultView

global.document = doc
global.window = win

Object.keys(window).forEach((key) => {
  if (!(key in global)) {
    global[key] = window[key]
  }
})

chai.use(chaiImmutable)
