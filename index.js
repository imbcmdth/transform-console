'use strict';

var TransformExpected = require('transform-expected'),
    util = require('util');

module.exports = TransformConsole;

var defaultEvents = ['end'];

var defaultTag = '';

var defaultDataLogger = function (thing, encoding) {
	console.log(thing);
};

var defaultEventLogger = function (name, event) {
	console.log(name);
};

function TransformConsole (options, expectation) {
	TransformExpected.call(this, options, expectation);

	var consoleOpts = options.console || {};

	this.dataLogger = consoleOpts.dataLogger || defaultDataLogger;
	this.eventLogger = consoleOpts.eventLogger || defaultEventLogger;

	var events = consoleOpts.events || defaultEvents;

	events.forEach(function(event){
		this._logEvent(event, this.tag);
	}, this);
}

util.inherits(TransformConsole, TransformExpected);

TransformConsole.expect = TransformExpected.expect;

TransformConsole.prototype._logEvent = function _logEvent (name) {
	this.on(name, function(event) {
		this.eventLogger(name, event);
	}.bind(this));
};

TransformConsole.prototype._expected = function (chunk, encoding, done) {
	this.dataLogger(chunk, encoding);

	this.push(chunk);
	done();
};
