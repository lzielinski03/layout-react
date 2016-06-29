import React from 'react';

import Element from './Element';

const Root = React.createClass({
	getInitialState: function() {
		return {
			'childs': []
		};
	},
	handleClick: function(e) {
		console.log('container');
		e.stopPropagation();
		this.setState({ 'childs': this.state.childs.concat('div') });
	},
	render: function() {
		console.log(this.state);
		return (
			<div className="container" onClick={this.handleClick}>
				{this.state.childs.map(function(child, i) {
					return <div className="box" key={i} />
				})}
			</div>
		);
	}
});

 export default Root;