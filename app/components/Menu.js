var React = require('react');
var PropTypes = React.PropTypes;
var MenuTrigger = require('../components/MenuTrigger');
var MenuReact = require('../components/MenuReact');

var menuCss = require('../styles/menu.less');

//  This is the demo of the different menu components together

function Menu (props) {
	return (
		<div>
			<MenuTrigger css={menuCss} type={props.triggerType} label={props.label} isFocused={props.isFocused} onTriggered={props.onTriggered} />
			<MenuReact css={menuCss} type={props.reactType} isFocused={props.isFocused} />
		</div>
	)
}



module.exports = Menu;