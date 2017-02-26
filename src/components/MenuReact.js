var React = require('react');
var PropTypes = React.PropTypes;
var classnames = require('classnames');

//---	  Menu Components          ---//
var InputContainer = require('../containers/InputContainer');
var SelectListContainer = require('../containers/SelectListContainer');


var InputGroup = require('../components/sub/InputGroup');
var RadioLabel = require('../components/sub/RadioLabel');
var RadioLabelGroup = require('../components/sub/RadioLabelGroup');
var SelectRange = require('../components/sub/SelectRange');

//---	  Menu Components styles    ---//
var inputGroupCss = require('../styles/inputGroup.less');
var radioLabelCss = require('../styles/radioLabel.less');
var radioLabelGroupCss = require('../styles/radioLabelGroup.less');
var selectRangeCss = require('../styles/selectRange.less');



function getClassNames (props) {
	return classnames (
		props.css.menu_react
	)
}

/* This is where you decide which menu component to show depending on the props that was passed. */
function MenuReact (props) {
	return (
		<div className={getClassNames(props)}>
			{props.type === 'input' && <InputContainer  name={props.name} value={props.value} onChangeValue={props.onChangeValue} />}

			{props.type === 'inputgroup' && <InputGroup css={inputGroupCss} name={props.name} value={props.value}  onChangeValue={props.onChangeValue}  />}
			
			{props.type === 'radiolabel' && <RadioLabel css={radioLabelCss} name={props.name} value={props.value}  onChangeValue={props.onChangeValue}  />}
			
			{props.type === 'radiolabelgroup' && <RadioLabelGroup css={radioLabelGroupCss} name={props.name} value={props.value}  onChangeValue={props.onChangeValue}  />}
			
			{props.type === 'selectlist' && <SelectListContainer name={props.name} value={props.value} onChangeValue={props.onChangeValue} selectionList={props.selectionList} />}
			
			{props.type === 'selectrange' && <SelectRange css={selectRangeCss} name={props.name} value={props.value}  onChangeValue={props.onChangeValue}  />}
		</div>
	)
	
}


MenuReact.propTypes = {
	css: PropTypes.object.isRequired,
	name: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	onChangeValue: PropTypes.func.isRequired,
	value: PropTypes.string.isRequired,

	selectionList: PropTypes.array
}

module.exports = MenuReact;