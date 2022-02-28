const service = require('node-windows').Service;
const path = require('path');

const svc = new service({
  name: 'IFP Application Server',
  description: 'Isaiah 41.10 Pharmacy Application',
  script: path.join(__dirname, 'app.js'),
});

svc.on('install', () => {
  svc.start();
});

svc.install();
