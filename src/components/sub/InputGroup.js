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
	css: PropTypes.object.isRequired
}


module.exports = InputGroup;