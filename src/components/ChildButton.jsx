import React from 'react';

export default React.createClass({
	render: function() {
		return <button onClick={ this.props.newChild }>Add child</button>;
	}
});