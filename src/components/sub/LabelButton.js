var React = require('react');
var PropTypes = React.PropTypes;


function LabelButton (props) {
	return (
		<div className={props.css.label} >	
			{props.label}
			<div className={props.css.sublabel}>{props.sublabel}</div>
		</div>
	) 	
}

LabelButton.propTypes = {
	css: PropTypes.object.isRequired,
	label: PropTypes.string.isRequired,
	sublabel: PropTypes.string.isRequired
}


module.exports = LabelButton;