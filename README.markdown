# Transform-Console

A stream-based logger implemented as a transform to peek into arbitrary parts of complex stream pipelines.

## Installation

### Node.js

For *Node.js*, use `npm`:

````console
npm install transform-console
````

..then `require` Transform-Console:

````javascript
var TransformConsole = require('transform-console');
````

## Quick Example

````javascript
var myLogger = new TransformConsole({
	objectMode: true,
	console: {
		dataLogger: function(data) {
			console.log('myLogger -', data);
		},
		events: ['finish']
	}
});

myLogger.write({val: "testing"});
myLogger.write("testing");
myLogger.write([1, 2, 3]);

myLogger.end();
````

You will see the following logged to your console:

````javascript
myLogger - { val: "testing" }
myLogger - "testing"
myLogger - [1, 2, 3]
finish
````

## API

#### `TransformConsole(options)`

* `options` Standard stream options object that can also include an optional `console` object. See below for more on the `console` object.

##### options.console

`dataLogger` Function(chunk, encoding)

Specify to log the contents of `chunk` (Object, Buffer, or string).

`eventLogger` Function(name, eventData)

Specify to log the events specified in the `events` array.

`events` Array of strings

List of events to listen for and log.

## License - MIT

> Copyright (C) 2013 Jon-Carlos Rivera
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
