var React = require('react');
var PropTypes = React.PropTypes;
var classnames = require('classnames');

/* This is the element that shows the menu component so that user can choose.
 * This is also where the label of the menu option selected is at.
 * Should pass the props that specify which menu component is reacting to ReactMenu component.
 */
function getClassNames (props) {
	return classnames(
		props.css.menu_trigger,
		props.isFocused ? props.css.focus : ''
	)
}
function MenuTrigger (props) {
	return <div className={getClassNames(props)} onClick={props.onTriggered} >{props.type}</div>
}


MenuTrigger.propTypes = {
	css: PropTypes.object.isRequired,
	type: PropTypes.string.isRequired
}



module.exports = MenuTrigger;