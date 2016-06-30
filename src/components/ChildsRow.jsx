import React from 'react';

export default React.createClass({
	render: function() {
		return (
			<div className="properties-row">
				<label>Child</label>
				<span className="space-beetwen"></span>
				<button onClick={ this.props.addChild }>Add child</button>
			</div>
		);
	}
});