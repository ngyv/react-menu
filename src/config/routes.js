var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var Menu = require('../components/Menu');
var MenuContainer = require('../containers/MenuContainer');


var routes = (
	<Router history={hashHistory}>
		<Route path='/' component={MenuContainer}>
		</Route>
	</Router>
);

module.exports = routes;