
var GulpIIS = require("./lib/SSI");

(function() {
	"use strict";

	var gulpiis = function(inputDirectory, outputDirectory, matcher) {
		this.parser = new GulpIIS(inputDirectory, outputDirectory, matcher);
	};

	gulpiis.prototype = {
		compile: function() {
			return this.parser.compile();
		},
		parse: function(filename, contents) {
			return this.parser.parse(filename, contents);
		}
	};

	module.exports = gulpiis;
})();
