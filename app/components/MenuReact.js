var React = require('react');
var PropTypes = React.PropTypes;

/* * *	  Menu Components here    * * */
var Input = require('../components/sub/Input');
var InputGroup = require('../components/sub/InputGroup');
var RadioLabel = require('../components/sub/RadioLabel');
var RadioLabelGroup = require('../components/sub/RadioLabelGroup');
var SelectList = require('../components/sub/SelectList');
var SelectRange = require('../components/sub/SelectRange');

var inputCss = require('../styles/input.css');
var inputGroupCss = require('../styles/inputGroup.css');
var radioLabelCss = require('../styles/radioLabel.css');
var radioLabelGroupCss = require('../styles/radioLabelGroup.css');
var selectListCss = require('../styles/selectList.css');
var selectRangeCss = require('../styles/selectRange.css');

/* This is where you decide which menu component to show depending on the props that was passed. */
function MenuReact (props) {
	return (
		<div>
			Menu React :
			{props.type === 'input' && <Input css={inputCss}  />}
			{props.type === 'inputgroup' && <InputGroup css={inputGroupCss}  />}
			{props.type === 'radiolabel' && <RadioLabel css={radioLabelCss}  />}
			{props.type === 'radiolabelgroup' && <RadioLabelGroup css={radioLabelGroupCss}  />}
			{props.type === 'selectlist' && <SelectList css={selectListCss}  />}
			{props.type === 'selectrange' && <SelectRange css={selectRangeCss}  />}
		</div>
	)
	
}


MenuReact.propTypes = {
	type: PropTypes.string.isRequired
}

module.exports = MenuReact;