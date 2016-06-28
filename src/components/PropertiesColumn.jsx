import React from 'react';

import DirectionRow from './DirectionRow';

export default React.createClass({
	changeDirection: function(e) {
		console.log(e);
		// change state or props in PreviewColumn
	},
	render: function() {
		return (
			<DirectionRow />
		);
	}
}); 