import { combineReducers } from 'redux'
import * as exampleReducer from './example'
import { routerStateReducer } from 'redux-router';

const rootReducer = combineReducers({
  ...exampleReducer,
  router: routerStateReducer,
})

export default rootReducer
