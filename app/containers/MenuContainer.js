var React = require('react');
var Menu = require('../components/Menu');

function getMenuOptions () {
	return [
		'price', 'payment'
	]
}
function getStateObject (type) {
	var t = getMenuOptions().reduce(function (state, cur) {
		state[cur + 'Focus'] = (cur === type);
		return state;
	}, {});
	console.log(t);
	return t;
}

var MenuContainer = React.createClass({
	getInitialState: function () {
		return getStateObject()
	},
	handleTriggered: function (type) {
		return function() {
			this.setState(getStateObject(type))
		}.bind(this)
	},
	render: function () {
		return (
			<div>
				<Menu triggerType='labelbutton' label='Price' reactType='input' isFocused={this.state.priceFocus} 
					onTriggered={this.handleTriggered('price')}  />
				<Menu triggerType='labelbutton' label='Payment type' reactType='selectlist' isFocused={this.state.paymentFocus} 
					onTriggered={this.handleTriggered('payment')}  />
			</div>
		)
	}
});


module.exports = MenuContainer;