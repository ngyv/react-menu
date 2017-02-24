var React = require('react');
var Menu = require('../components/Menu');

var menuList = [
	{
		key: 'price',
		label: 'Price',
		triggerType: 'labelbutton',
		reactType: 'input'
	},
	{
		key: 'payment',
		label: 'Payment method',
		triggerType: 'labelbutton',
		reactType: 'selectlist'
	}
];


var MenuContainer = React.createClass({
	getInitialState: function () {
		return {

		}
	},
	handleTriggered: function (type) {
		return function() {
			var prev = this.state;
			this.setState({
				inFocus: (prev.inFocus != type) ? type : null
			})
		}.bind(this)
	},
	render: function () {
		return (
			<Menu menuList={menuList} handleTriggered={this.handleTriggered} inFocus={this.state.inFocus}/>
		)
	}
});


module.exports = MenuContainer;