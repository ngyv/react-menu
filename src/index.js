/*  Types of menu:
 *  -	Select list (With selection text on menu button)
 *  -   Select list with range
 *  -   Input with add and subtract button (can disable input)
 *  -   Radio button with label
 */

 var React = require('react');
 var ReactDOM = require('react-dom');
 var routes = require('./config/routes');

 ReactDOM.render(
 	routes,
 	document.getElementById('app')
 );