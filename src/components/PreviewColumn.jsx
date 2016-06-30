import React from 'react';

import RootContainer from './RootContainer';

const PreviewColumn = React.createClass({
	render: function() {
		return (
			<div className="l_preview-column">
				<h1>Preview</h1>

				<RootContainer three={this.props.three}/>
			</div>
		);
	}
});

export default PreviewColumn;