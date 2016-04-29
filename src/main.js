var libxmljs = require('libxmljs-mt');

function convertXml(xml) {
	var parsedXml = libxmljs.parseXml(xml);

	var gchild = parsedXml.get('//CD//TITLE').text();


	return gchild;
}

module.exports = {
	convertXml: convertXml
}