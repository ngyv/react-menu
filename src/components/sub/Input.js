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
	css: PropTypes.object.isRequired
}


module.exports = Input;