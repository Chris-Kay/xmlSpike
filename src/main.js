var libxmljs = require('libxmljs-mt');
var fs = require('file-system');

function readXml(xml) {
    var passsedXml = fs.readFileSync(xml, "utf-8");
    convertXml(passsedXml);
}

function convertXml(xml) {
	var parsedXml = libxmljs.parseXml(xml);
	var gchild = parsedXml.get('//CD//TITLE').text();

	console.log(gchild);
	return gchild;
}

module.exports = {
	convertXml: convertXml,
	readXml: readXml
}