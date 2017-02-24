var React = require('react');
var PropTypes = React.PropTypes;


function LabelButton (props) {
	return (
		<div className={props.css.label} >	
			{props.label}
		</div>
	) 	
}

LabelButton.propTypes = {
	css: PropTypes.object.isRequired
}


module.exports = LabelButton;