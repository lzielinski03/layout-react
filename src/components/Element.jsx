import React from 'react';

export default React.createClass({
	getInitialState: function() {
		return {
			'childs': [],
			'type': 'block',
			'properties': {
				'direction': 'row',
				'align': 'center'
			}
		};
	},
	render: function() {
		return (
			<div className="box" onClick={this.props.addChild}>a
			</div>
		);
	}
});