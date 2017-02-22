var React = require('react');
var PropTypes = React.PropTypes;

/* * *	  Menu Components here    * * */
var Input = require('../components/sub/Input');
var InputGroup = require('../components/sub/InputGroup');
var RadioLabel = require('../components/sub/RadioLabel');
var RadioLabelGroup = require('../components/sub/RadioLabelGroup');
var SelectList = require('../components/sub/SelectList');
var SelectRange = require('../components/sub/SelectRange');

/* This is where you decide which menu component to show depending on the props that was passed. */
function MenuReact (props) {
	return (
		<div>
			Menu React :
			{props.type == 'input' && <Input />}
			{props.type == 'inputgroup' && <InputGroup />}
			{props.type == 'radiolabel' && <RadioLabel />}
			{props.type == 'radiolabelgroup' && <RadioLabelGroup />}
			{props.type == 'selectlist' && <SelectList />}
			{props.type == 'selectrange' && <SelectRange />}
		</div>
	)
	
}


MenuReact.propTypes = {
	type: PropTypes.string.isRequired
}

module.exports = MenuReact;