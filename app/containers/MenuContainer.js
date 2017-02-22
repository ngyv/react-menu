var React = require('react');
var Menu = require('../components/Menu');


var MenuContainer = React.createClass({
	render: function () {
		return (
			<Menu reactType='input'/>
			)
	}
});


module.exports = MenuContainer;