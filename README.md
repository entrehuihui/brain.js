# brain

brain is a client/server-side javascript neural network library. An example (training the XOR bitwise operation):

	var data = [{input: [0, 0], target: [0]},
	            {input: [0, 1], target: [1]},
	            {input: [1, 0], target: [1]},
	            {input: [1, 1], target: [0]}];

	var net = new NeuralNetwork();
	net.train(data);
	var output = net.run([1, 0]);

The output will be `[0.987]` or something close like that. There's no reason to use a neural network to figure out XOR, but it's a small example (-:

# using in the browser
Download the latest client-side file at:
[http://github.com/downloads/harthur/brain/brain.js](http://github.com/downloads/harthur/brain/brain.js). Because neural network training can take a long time, if you can you should train the network offline and use the `toFunction()` or `toJSON()` options to plug the trained network in to your website.

# using as a commonJS module
To use this as a commonJS module (node/narwhal) checkout or download the code, then:

	var brain = require("./brain");
	var net = new brain.NeuralNetwork();

# tests
Running the tests requires [node.js](http://nodejs.org/):

	node tests/runner.js
