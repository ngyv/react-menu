var React = require('react');
var Menu = require('../components/Menu');
var onClickOutside = require('react-onclickoutside');


var defaultSublabel = 'Any';

var menuList = {
	'price': {
		label: 'Price',
		sublabel: defaultSublabel,
		triggerType: 'labelbutton',
		reactType: 'input',
		value: ''

	},
	'payment' : {
		label: 'Payment method',
		sublabel: defaultSublabel,
		triggerType: 'labelbutton',
		reactType: 'selectlist',
		value: '',
		selectionList: [{text: defaultSublabel, value: ''}, {text: 'VISA', value: 1}, {text: 'MasterCard', value: 2}]
	}
};


var MenuContainer = React.createClass({
	getInitialState: function () {
		return {
			inFocus: null,
			menuList: menuList
		}
	},
	handleClickOutside: function (event) {
		this.setState({
			inFocus: null
		})
	},
	// To show which menu item is currently in focus
	handleTriggered: function (key) {
		return function() {
			var prev = this.state;
			this.setState({
				inFocus: (prev.inFocus != key) ? key : null
			})
		}.bind(this)
	},
	// To update the value of the selected menu item 
	handleChangeValue: function (key, value, sublabel, toClose: false) {
		return function() {
			var inFocus = this.state.inFocus;
			var updatedMenuList = this.state.menuList;
			updatedMenuList[key].value = value.toString(); 
			updatedMenuList[key].sublabel = sublabel.length ? sublabel : defaultSublabel; 

			console.log('handleChangeValue', updatedMenuList)

			this.setState({
				inFocus: toClose ? null : inFocus,
				menuList: updatedMenuList
			})
		}.bind(this)
	},	render: function () {
		return (
			<Menu menuList={this.state.menuList} handleTriggered={this.handleTriggered} handleChangeValue={this.handleChangeValue} 
				 resetMenuFocus={this.handleClickOutside} inFocus={this.state.inFocus ? this.state.inFocus  : ''} />
		)
	}
});


module.exports = onClickOutside(MenuContainer);