var React = require('react');
var PropTypes = React.PropTypes;
var MenuTrigger = require('../components/MenuTrigger');
var MenuReact = require('../components/MenuReact');

var menuCss = require('../styles/menu.css');

/*  This is the demo of the different menu components together
 */
function Menu (props) {
	return (
		<div>
			<MenuTrigger type='Label button'/>
			<MenuReact type='inputgroup'/>
		</div>
	)
}


Menu.propTypes = {
	reactType: PropTypes.string.isRequired
}

module.exports = Menu;