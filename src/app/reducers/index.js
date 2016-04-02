import { combineReducers } from 'redux'
// import isLeftNavOpen from './isLeftNavOpen'
import counter from './counter'
import leftNav from './leftNav'

const metromedApp = combineReducers({
  counter,
  leftNav,
})

export default metromedApp