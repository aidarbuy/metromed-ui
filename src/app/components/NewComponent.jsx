import React from 'react'

class NewComponent extends React.Component {
	constructor(props, context) {
		super(props, context)
		this.store = context.store
	}
	render() {
		return (
			<h1>store.getState()</h1>
		)
	}
}

NewComponent.contextTypes = {
  store: React.PropTypes.object
}

export default NewComponent;