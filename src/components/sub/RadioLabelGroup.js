var React = require('react');
var PropTypes = React.PropTypes;

function RadioLabelGroup (props) {
	return  (
		<div>
			Radio Label Group
		</div>
	)

}

RadioLabelGroup.propTypes = {
	css: PropTypes.object.isRequired,
	name: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	onChangeValue: PropTypes.func.isRequired
}

module.exports = RadioLabelGroup;