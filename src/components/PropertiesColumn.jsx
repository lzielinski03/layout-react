import React from 'react';

import DirectionRow from './DirectionRow';
import TestBox from './TestBox';
import ChildButton from './ChildButton';

export default React.createClass({
	getInitialState: function() {
		return {
			rowDirection: true,
			childs: []
		};
	},
	changeDirection: function(e) {
		this.setState({'rowDirection': !this.state.rowDirection});
	},
	AddChild: function(e) {
		console.log(e);
	},
	render: function() {
		return (
			<div>
				<DirectionRow toggleDirection={this.changeDirection} direction={this.state.rowDirection}/>
				<ChildButton newChild={this.AddChild}/>
				<TestBox direction={this.state.rowDirection}/>
			</div>
		);
	}
}); 