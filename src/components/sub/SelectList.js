var React = require('react');
var PropTypes = React.PropTypes;

function SelectList (props) {
	return  (
		<div>
			Select list
		</div>
	)

}

SelectList.propTypes = {
	css: PropTypes.object.isRequired
}


module.exports = SelectList;