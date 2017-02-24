var React = require('react');
var PropTypes = React.PropTypes;
var MenuTrigger = require('../components/MenuTrigger');
var MenuReact = require('../components/MenuReact');
var classnames = require('classnames');

var menuCss = require('../styles/menu.less');


function getMenu (option) {
	return (
		<span key={option.key} className={menuCss.menu_container}>
			<MenuTrigger css={menuCss} type={option.triggerType} label={option.label} isFocused={(this.inFocus === option.key)} onTriggered={this.handleTriggered(option.key)} />
			<MenuReact css={menuCss} type={option.reactType} isFocused={(this.inFocus === option.key)} />
		</span>
	)
}


//  This is the demo of the different menu components together
function Menu (props) {
	return (
		<div className={menuCss.flex_container}>
			{props.menuList.map(getMenu.bind(props))}
		</div>
	)
}

Menu.propTypes = {
	menuList: PropTypes.array.isRequired,
	handleTriggered: PropTypes.func.isRequired
}

module.exports = Menu;