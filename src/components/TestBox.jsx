import React from 'react';
import classNames from 'classnames';

export default React.createClass({
	
	render: function() {
		var containerClasses = classNames({
			'container': true,
			'displayColumn': this.props.direction
		});
		return (
			<div className={containerClasses}>
				<div className="box">{ this.props.direction }</div>
				<div className="box">{ this.props.direction }</div>
				<div className="box">{ this.props.direction }</div>
				<div className="box">{ this.props.direction }</div>
			</div>
		);
	}
});