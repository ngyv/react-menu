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
function getMenu (option) {
	return (
		<Menu key={option.key} triggerType={option.triggerType} label={option.label} reactType={option.reactType} 
			isFocused={(this.state.isFocused === option.key)} onTriggered={this.handleTriggered(option.key)}  />
	)
}
function getMenuList () {
	return (
		<div>
			{menuList.map(getMenu.bind(this))}
		</div>
	)
}

var MenuContainer = React.createClass({
	getInitialState: function () {
		return {

		}
	},
	handleTriggered: function (type) {
		return function() {
			this.setState({
				isFocused: type
			})
		}.bind(this)
	},
	render: function () {
		return (
			<div>
			{
				getMenuList.bind(this)()
			}
			</div>
		)
	}
});


module.exports = MenuContainer;