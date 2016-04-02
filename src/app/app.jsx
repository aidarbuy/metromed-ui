import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import AppRoutes from './AppRoutes'
import reducer from './reducers'
import { createStore } from 'redux'
import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin()

Provider.childContextTypes = {
	store: React.PropTypes.object
}

ReactDOM.render(
	<Provider store={createStore(reducer)}>
		<Router
		  history={browserHistory}
		  onUpdate={() => window.scrollTo(0, 0)}>
		  {AppRoutes}
		</Router>
	</Provider>, 
	document.getElementById('app')
)