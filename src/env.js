const fs = require('fs');
const resourcesFile = './src/resources/env.json';

const envString = fs.readFileSync(resourcesFile);
const apiKeys = JSON.parse(envString);

module.exports  = {
    apiKeys
}