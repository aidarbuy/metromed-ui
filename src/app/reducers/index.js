// src/app/reducers/index.js

import { combineReducers } from 'redux';

import appBar  from './appBar';
import leftNav from './leftNav';
import router  from './router';

export default combineReducers({
  appBar,
  leftNav,
  router,
});