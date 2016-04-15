// src/app/AppRoutes.jsx

import React from 'react'

import {
  Route,
  Redirect,
  IndexRoute,
} from 'react-router'

// Here we define all our material-ui ReactComponents.
import Layout 	from './Layout'
import Home 		from './routes/Home'
import About 		from './routes/About'
import Services from './routes/Services'
import Doctors 	from './routes/Doctors'
import Primary 	from './routes/Primary'
import Map 			from './routes/Map'
import Virtual  from './routes/Virtual'
import Telemed  from './routes/Telemed'
import Articles from './routes/Articles'

/**
 * Routes: https://github.com/rackt/react-router/blob/master/docs/api/components/Route.md
 *
 * Routes are used to declare your view hierarchy.
 *
 * Say you go to http://material-ui.com/#/components/paper
 * The react router will search for a route named 'paper' 
 * and will recursively render its handler and its parent 
 * handler like so: Paper > Components > Master
 */
export default (
  <Route path="/" component={Layout}>
    <IndexRoute component={Home}/>
    <Route path="about" 
    	component={About}
    />
    <Route path="services" 
    	component={Services}
    />
    <Route path="doctors" 
    	component={Doctors}
    />
    <Route path="primary" 
    	component={Primary}
    />
    <Route path="map" 
    	component={Map}
    />
    <Route path="virtual" 
      component={Virtual}
    />
    <Route path="telemed" 
      component={Telemed}
    />
    <Route path="articles" 
    	component={Articles}
    />
  </Route>
)