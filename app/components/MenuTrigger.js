var React = require('react');
var PropTypes = React.PropTypes;


/* This is the element that shows the menu component so that user can choose.
 * This is also where the label of the menu option selected is at.
 * Should pass the props that specify which menu component is reacting to ReactMenu component.
 */

function MenuTrigger (props) {
	return <div>Menu Trigger : {props.type}</div>
}


MenuTrigger.propTypes = {
	type: PropTypes.string.isRequired
}



module.exports = MenuTrigger;