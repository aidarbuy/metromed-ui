// src/app/reducers/index.js

import { combineReducers } from 'redux';

import counter from './counter';
import leftNav from './leftNav';
import router  from './router';

export default combineReducers({
  counter,
  leftNav,
  router,
});