import React from 'react';

import PropertiesColumn from './PropertiesColumn';
import PreviewColumn from './PreviewColumn';

const LayoutBuilder = React.createClass({
	getInitialState: function() {
		return {
			'childs': [],
			'direction': 'column'
		};
	},
	toggleDirection: function(e) {
		let toggled = this.state.direction === 'column' ? 'row' : 'column';
		console.log(toggled);
		this.setState({'direction': toggled});
	},
	addChild: function(e) {
		this.setState({'childs': this.state.childs.concat('<div>a</div>')});
		
	},
	render: function() {
		return (
			<div className="l_layout-builder">
				<PropertiesColumn addChild={this.addChild} toggleDirection={this.toggleDirection} direction={this.state.direction}/>
				<PreviewColumn three={this.state}/>
			</div>
		);
	}
});

export default LayoutBuilder;