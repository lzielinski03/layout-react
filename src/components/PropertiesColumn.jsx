import React from 'react';

import DirectionRow from './DirectionRow';
import TestBox from './TestBox';
import Root from './Root';
import ChildsRow from './ChildsRow';

export default React.createClass({
	render: function() {
		return (
			<div className="l_properties-column">
				<h2 className="properties-column--title">Propiedades</h2>
				
				<DirectionRow toggleDirection={this.props.toggleDirection} direction={this.props.direction}/>
				{/*<DirectionRow toggleDirection={this.changeDirection}/>*/}
				<ChildsRow addChild={this.props.addChild}/>
				{/*<TestBox direction={this.state.rowDirection}/>
				<Root/>*/}
			</div>
		);
	}
}); 