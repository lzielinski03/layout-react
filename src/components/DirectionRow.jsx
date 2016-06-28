import React from 'react';

export default React.createClass({
	getDefaultProps: function() {
		return {
			direction: 'Column'
		}
	},
	toggleDirection: function() {
		this.props.direction = 'Row';
	},
	render: function() {
		return (
			<button onClick={this.toggleDirection()}>{ this.props.direction }</button>
		);
	}
});