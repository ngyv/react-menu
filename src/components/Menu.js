var React = require('react');
var PropTypes = React.PropTypes;
var MenuTrigger = require('../components/MenuTrigger');
var MenuReact = require('../components/MenuReact');
var classnames = require('classnames');

var menuCss = require('../styles/menu.less');


function constructMenu (key) {
	var option = this.menuList[key];
	return (
		<span key={key} className={menuCss.menu_item_container}>

			<MenuTrigger css={menuCss} type={option.triggerType} label={option.label} sublabel={option.sublabel} 
				isFocused={(this.inFocus === key)}  onTriggered={this.handleTriggered(key)} />

			<MenuReact css={menuCss} type={option.reactType} isFocused={(this.inFocus === key)} name={key} value={option.value} 
				onChangeValue={this.handleChangeValue} 
				selectionList={ (option.selectionList && option.selectionList.length) ? option.selectionList : undefined} />

		</span>
	)
}

function constructMenuList (props) {
	return Object.keys(props.menuList).map(constructMenu.bind(props))
}

//  This is the demo of the different menu components together
function Menu (props) {
	return (
		<div>
			<div className={menuCss.menu_container_mobile}>
				Mobile Menu Component
			</div>
			<div className={classnames(menuCss.flex_container, menuCss.menu_container)}>
				{constructMenuList(props)}
			</div>
		</div>
	)
}

Menu.propTypes = {
	menuList: PropTypes.object.isRequired,
	handleTriggered: PropTypes.func.isRequired,
	handleChangeValue: PropTypes.func.isRequired
}

module.exports = Menu;