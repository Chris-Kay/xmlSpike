var main = require('../src/main.js');
var fs = require('file-system');
var libxmljs = require('libxmljs-mt');


	describe("A suite", function() {
	  it("contains spec with an expectation", function() {
  	    var xml = fs.readFileSync(__dirname + "/res/cd_catalog.xml", "utf-8");
	    expect(main.convertXml(xml)).toBe(false);
	  });
	});