var React = require('react');
var PropTypes = React.PropTypes;

function Input (props) {
	return (
		<div className={props.css.input}>	
			Input
		</div>
	) 	
}

Input.propTypes = {
	css: PropTypes.object.isRequired,
	name: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	onChangeValue: PropTypes.func.isRequired
}


module.exports = Input;