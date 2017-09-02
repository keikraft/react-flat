const {JSDOM} = require('jsdom');

const exposedProperties = ['window', 'navigator', 'document'];

const dom = new JSDOM('');
global.window = dom.window;
global.document = dom.window.document;
Object.keys(dom.window.document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = dom.window.document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};