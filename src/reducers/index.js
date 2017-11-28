import { combineReducers } from 'redux'
import config from '../dashboard.config'
import { navbarReducer } from '../containers/Navbar/reducer'

const configReducer = (state = config, action = {}) => {
  return Object.freeze(state)
}

export default combineReducers({
  config: configReducer,
  navbar: navbarReducer
})
