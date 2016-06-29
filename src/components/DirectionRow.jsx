import React from 'react';

export default React.createClass({
	render: function() {
		var label = this.props.direction ? 'Column' : 'Row';
		return (
			<button onClick={this.props.toggleDirection}>{ label }</button>
		);
	}
});