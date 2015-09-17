import React from 'react'
import Foo from 'foo'
import fetch from 'isomorphic-fetch'

window.React = React


class HelloWorld extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: props.name
    }
  }

  handleHover() {
    return fetch('/pages/json.json').then((response) => {
        return response.json()
    })
    .then((json) => {
        return this.setState({
          name: json.name
        })
      }
    )
  }

  render() {
    return(
      <div onMouseOver={this.handleHover.bind(this)}>
        <h2>
          Hello {this.state.name}
        </h2>
        <Foo name={this.state.name} />
      </div>
    )
  }
}


React.render(
  <HelloWorld name="You" />,
  document.body
)

module.exports = HelloWorld
