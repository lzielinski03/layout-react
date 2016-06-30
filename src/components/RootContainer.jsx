import React from 'react';

import Element from './Element';

const RootContainer = React.createClass({
	render: function() {
		return (
			<div className="root-container">
				{this.props.three.childs.map(function(child, i) {
					console.log(child);
					return <Element key={i}/>;
				})}
			</div>
		);
	}
});

export default RootContainer;