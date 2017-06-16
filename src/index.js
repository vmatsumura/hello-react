'use strict'

console.log("webpack funfando");
console.log("webpack dev server funcionando");

var React = require('react');
var ReactDOM = require('react-dom');

var Title = require('./app');

ReactDOM.render(
	React.createElement(Title),
	document.querySelector('[data-js="app"]')
);
