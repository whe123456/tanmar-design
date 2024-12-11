const { resolve } = require('path');
const CreateDirStructure = require('./plugins/createDirStructure');

module.exports = {
  mode: 'production', // development
  plugins:[
    new CreateDirStructure({
      name: 'block',
      path: resolve(__dirname, 'src')
    })
  ]
};