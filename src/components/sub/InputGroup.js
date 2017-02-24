var React = require('react');
var PropTypes = React.PropTypes;

function InputGroup (props) {
	return (
		<div>
			Input Group
		</div>
	)	
}

InputGroup.propTypes = {
	css: PropTypes.object.isRequired,
	name: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	onChangeValue: PropTypes.func.isRequired
}


module.exports = InputGroup;