var React = require('react');
var PropTypes = React.PropTypes;
var Input = require('../components/sub/Input');
var css = require('../styles/input.less');


var InputContainer = React.createClass({
	propTypes: {
		name: PropTypes.string.isRequired,
		value: PropTypes.string.isRequired,
		onChangeValue: PropTypes.func.isRequired
	},
	handleChange: function (event) {
		// If you only want numbers, you can do some filtering here before setting the state
		this.props.onChangeValue(this.props.name, event.target.value, event.target.value).call();
	},
	render: function () {
		return (
			<Input css={css} name={this.props.name} value={this.props.value} onChange={this.handleChange} />
		)
	}
});


module.exports = InputContainer;