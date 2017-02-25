var React = require('react');
var PropTypes = React.PropTypes;

function Input (props) {
	return (
		<div className={props.css.input_container}>	
			<input className={props.css.input} type='text' placeholder={props.placeholder} 
				onChange={props.onChange} value={props.text}/>
		</div>
	) 	
}

Input.propTypes = {
	css: PropTypes.object.isRequired,
	name: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	placeholder: PropTypes.string
}


module.exports = Input;