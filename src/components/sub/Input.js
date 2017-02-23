var React = require('react');
var PropTypes = React.PropTypes;

function puke(obj) {
	return <pre>{JSON.stringify(obj, null, '    ')}</pre>
}
function Input (props) {
	return (
		<div className={props.css.input}>	
			{puke(props.css)}
		</div>
	) 	
}

Input.propTypes = {
	css: PropTypes.object.isRequired
}


module.exports = Input;