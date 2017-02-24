var React = require('react');
var PropTypes = React.PropTypes;
var classnames = require('classnames');

//---	  Menu Components          ---//
var Input = require('../components/sub/Input');
var InputGroup = require('../components/sub/InputGroup');
var RadioLabel = require('../components/sub/RadioLabel');
var RadioLabelGroup = require('../components/sub/RadioLabelGroup');
var SelectList = require('../components/sub/SelectList');
var SelectRange = require('../components/sub/SelectRange');

//---	  Menu Components styles    ---//
var inputCss = require('../styles/input.less');
var inputGroupCss = require('../styles/inputGroup.less');
var radioLabelCss = require('../styles/radioLabel.less');
var radioLabelGroupCss = require('../styles/radioLabelGroup.less');
var selectListCss = require('../styles/selectList.less');
var selectRangeCss = require('../styles/selectRange.less');



function getClassNames (props) {
	return classnames (
		props.css.menu_react,
		props.isFocused ? props.css.show : ''
	)
}

/* This is where you decide which menu component to show depending on the props that was passed. */
function MenuReact (props) {
	return (
		<div className={getClassNames(props)}>
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
	css: PropTypes.object.isRequired,
	type: PropTypes.string.isRequired
}

module.exports = MenuReact;