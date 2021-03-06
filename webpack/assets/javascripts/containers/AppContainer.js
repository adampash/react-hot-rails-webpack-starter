import React from 'react'
import { connect, dispatch } from 'react-redux'
import { pushState } from 'redux-router'
import { Link } from 'react-router'
import DumbComponent from '../components/DumbComponent'
import { test } from '../actions/example'


let AppContainer = React.createClass({
  render() {
    const { dispatch, foo } = this.props
    return(
      <div>
        <Link to="/login">Log in</Link>
        <DumbComponent
          foo={foo}
          test={(text='hi') => dispatch(test(text))}
        />
        { this.props.children }
      </div>
    )
  }
})

function select(state) {
  return {
    ...state,
  }
}

export default connect(select)(AppContainer)
