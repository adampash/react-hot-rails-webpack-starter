React = require 'React'

HelloWorld = React.createClass
  render: ->
    <div>
      Hi dude
    </div>

React.render(
  <HelloWorld />,
  document.body
)
