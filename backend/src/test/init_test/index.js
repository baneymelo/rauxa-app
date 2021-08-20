const fs = require('fs');
const { initUpload } = require('../../aws/S3');
const assets = require("./assets");
const descriptions = require("./description.json");
const path = require('path');


const files = assets.map(asset => fs.createReadStream(asset))
const ext = assets.map(asset => path.extname(asset));
initUpload(files, ext)

//module.exports = files;