var React = require('react');
var PropTypes = React.PropTypes;
var SelectList = require('../components/sub/SelectList');

var css = require('../styles/selectList.less');


var SelectListContainer = React.createClass({
	propTypes: {
		name: PropTypes.string.isRequired,
		value: PropTypes.string.isRequired,
		selectionList: PropTypes.array.isRequired,
		onChangeValue: PropTypes.func.isRequired
	},
	handleChange: function (value, text) {
		return this.props.onChangeValue(this.props.name, value, text, true)
	},
	render: function () {
		return (
			<SelectList css={css} name={this.props.name} value={this.props.value} selectionList={this.props.selectionList} 
				onChange={this.handleChange} />
		)
	}
});


module.exports = SelectListContainer;