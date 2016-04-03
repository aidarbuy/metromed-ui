import React from 'react'
import ArticlesData from '../components/articles'

class Articles extends React.Component {
	constructor(props, context) {
		super(props, context)
	}
	render() {
		return (
			<h1>{ArticlesData[1].header}</h1>
		)
	}
}

export default Articles