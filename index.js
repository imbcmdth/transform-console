'use strict';

var stream = require('stream'),
    util = require('util');

module.exports = TransformConsole;

var events = [
	"close",
	"end",
	"finish"
];

function TransformConsole(options, tag) {
	stream.Transform.call(this, options);
	this.tag = tag;

	events.forEach(function(event){
		this._logEvent(event, this.tag);
	}, this);
}

util.inherits(TransformConsole, stream.Transform);

TransformConsole.prototype._logEvent = function _logEvent (name, tag) {
	this.on(name, function() {
		console.log(this.tag, "-", name);
	});
};

TransformConsole.prototype._transform = function(chunk, encoding, callback) {
	console.log(this.tag, "-", chunk);
	this.push(chunk);
	callback();
};
