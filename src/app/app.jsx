import React           from 'react';
import ReactDOM        from 'react-dom';
import { Provider }    from 'react-redux';
import { createStore } from 'redux';
import { Router, browserHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Routes  from './Routes';
import reducer from './reducers/index';

injectTapEventPlugin();

Provider.childContextTypes = {
  store: React.PropTypes.object
};

ReactDOM.render(
  <Provider store={createStore(reducer)}>
    <Router history={browserHistory} onUpdate={()=> window.scrollTo(0, 0)}>
      {Routes}
    </Router>
  </Provider>, 
  document.getElementById('app')
);