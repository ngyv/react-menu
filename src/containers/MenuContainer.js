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
	handleChangeValue: function (key, value) {
		return function() {
			var updatedMenuList = this.state.menuList;
			updatedMenuList[key].value = value.toString(); 

			if(updatedMenuList[key].selectionList && updatedMenuList[key].selectionList.length) {
				var selectedText = defaultSublabel;
				updatedMenuList[key].selectionList.map(function(option) {
					if(option.value.toString() === value) {
						selectedText = option.text;
					}
				});
				updatedMenuList[key].sublabel = selectedText;
			}

			this.setState({
				menuList: updatedMenuList
			})
		}.bind(this)
	},
	render: function () {
		return (
			<Menu menuList={this.state.menuList} handleTriggered={this.handleTriggered} handleChangeValue={this.handleChangeValue} 
				 inFocus={this.state.inFocus ? this.state.inFocus  : ''} />
		)
	}
});


module.exports = onClickOutside(MenuContainer);