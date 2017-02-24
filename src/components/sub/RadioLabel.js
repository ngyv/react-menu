var React = require('react');
var PropTypes = React.PropTypes;

function RadioLabel (props) {
	return  (
		<div>
			Radio label
		</div>
	)

}

RadioLabel.propTypes = {
	css: PropTypes.object.isRequired,
	name: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	onChangeValue: PropTypes.func.isRequired
}


module.exports = RadioLabel;