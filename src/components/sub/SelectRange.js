var React = require('react');
var PropTypes = React.PropTypes;

function SelectRange (props) {
	return  (
		<div>
			Select range
		</div>
	)

}

SelectRange.propTypes = {
	css: PropTypes.object.isRequired,
	name: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	onChangeValue: PropTypes.func.isRequired
}


module.exports = SelectRange;