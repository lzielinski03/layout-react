import React from 'react';

export default React.createClass({
	render: function() {
		return (
			<div className="properties-row">
				<label>Direccion</label>
				<span className="space-beetwen"></span>
				<button onClick={this.props.toggleDirection}>{ this.props.direction }</button>
			</div>
		);
	}
});