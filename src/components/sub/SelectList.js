var React = require('react');
var PropTypes = React.PropTypes;
var classnames = require('classnames');

function getClassNames (props, value) {
	return classnames (
		props.css.option,
		props.value === value.toString() ? props.css.selected : ''
	)
}
function constructOption (option) {
	return (
		<div className={getClassNames(this, option.value)} key={option.value} value={option.value} 
			onClick={this.onChange(option.value.toString(), option.text)}>{option.text}</div>
	)
}

function constructList (props) {
	return props.selectionList.map(constructOption.bind(props))
}

function SelectList (props) {
	return  (
		<div className={props.css.select_list}>
			{constructList(props)}
		</div>
	)
}

SelectList.propTypes = {
	css: PropTypes.object.isRequired,
	name: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	selectionList: PropTypes.array.isRequired,
	onChange: PropTypes.func.isRequired
}


module.exports = SelectList;