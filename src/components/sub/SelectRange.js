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
	css: PropTypes.object.isRequired
}


module.exports = SelectRange;