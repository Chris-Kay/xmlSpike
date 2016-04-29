var libxmljs = require('libxmljs-mt');
var fs = require('file-system');


convertXml(process.argv.slice(2)[0]);

function convertXml(xml) {
    var passsedXml = fs.readFileSync(xml, "utf-8");
	var parsedXml = libxmljs.parseXml(passsedXml);
	var gchild = parsedXml.get('//CD//TITLE').text();

	console.log(gchild);
	return gchild;
}

module.exports = {
	convertXml: convertXml
}