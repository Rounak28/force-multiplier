const _ = require('lodash');
const path = require('path');
// module variables
const config = require('./config.json');
const defaultConfig = config.development;
const environment = process.env.NODE_ENV || 'developement' ;
const environmentConfig = config[environment];
const fs = require('fs');
const finalConfig = _.merge(defaultConfig, environmentConfig);


global.gConfig = finalConfig;
global.gConfig.rootPath = path.normalize(__dirname + '/../');

