import React from 'react';
import {
  Route,
  Redirect,
  IndexRoute,
} from 'react-router';

// Here we define all our material-ui ReactComponents.
// import Master from './components/master';
import Layout from './Layout';
// import Home from './components/pages/home';
import Home from './routes/Home'
import About from './routes/About'
// import Doctors from './Doctors'
// import Map from './Map'
// import Primary from './Primary'
// import Services from './Services'
// import Virtual from './Virtual'

/**
 * Routes: https://github.com/rackt/react-router/blob/master/docs/api/components/Route.md
 *
 * Routes are used to declare your view hierarchy.
 *
 * Say you go to http://material-ui.com/#/components/paper
 * The react router will search for a route named 'paper' and will recursively render its
 * handler and its parent handler like so: Paper > Components > Master
 */
const AppRoutes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={Home} />
    <Route path="about" component={About}>
    </Route>
  </Route>
);

export default AppRoutes;