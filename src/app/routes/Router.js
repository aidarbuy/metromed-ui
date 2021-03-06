// src/app/router/Router.jsx

import React from 'react';
import ListItem from 
  'material-ui/lib/lists/list-item';

export default React.createClass({
	// ask for 'router' from context
	contextTypes: {
	  router: React.PropTypes.object
	},

	render() {
		// console.log(this.props.location.pathname);

		const { router } = this.context;
		return (
			<div>
			{Object.keys(this.props.route.path).map((k, i)=>(
				<ListItem key={i}>{k}</ListItem>
			))}
			</div>
		)
	}
});