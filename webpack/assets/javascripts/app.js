import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import {
  DevTools,
  DebugPanel,
  LogMonitor
} from 'redux-devtools/lib/react'
import 'babel-core/polyfill'
import configureStore from './configureStore'
import AppContainer from './containers/AppContainer'

window.React = React
let store = configureStore()



ReactDOM.render(
  <div>
    <Provider store={store}>
      <AppContainer />
    </Provider>
    {__DEVTOOLS__ &&
      <DebugPanel top right bottom>
        <DevTools store={store} monitor={LogMonitor} />
      </DebugPanel>
      }
    </div>
  ,
  document.querySelector('#root')
)
