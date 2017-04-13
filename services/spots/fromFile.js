var fs = require("fs");

function readJsonFileSync(filepath, encoding){
    if (typeof (encoding) == 'undefined'){
        encoding = 'utf8';
    }
    var file = fs.readFileSync(filepath, encoding);
    return JSON.parse(file);
}

function readJson(file){
    var filepath = __dirname + '/../../data/' + file;
    return readJsonFileSync(filepath);
}

var json = readJson('spots.json');

var spotsFromFile = function() {
    return new Promise((resolve, reject) => resolve(json.spots))
}

module.exports = spotsFromFile