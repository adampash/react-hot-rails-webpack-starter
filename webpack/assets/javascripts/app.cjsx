React = require 'react'
window.React = React
Foo = require 'foo'

HelloWorld = React.createClass
  getInitialState: ->
    name: @props.name
  handleHover: ->
    $.ajax
      url: '/pages/json'
      method: 'GET'
      dataType: 'json'
      success: (response) =>
        @setState
          name: response.name
      error: (e) =>
        debugger
  render: ->
    <div onMouseOver={@handleHover}>
      <h2>
        Hi {@state.name}.
      </h2>
      <Foo name={@state.name} />
    </div>

React.render(
  <HelloWorld name={"Adam"} />,
  document.body
)

module.exports = HelloWorld
