import React from 'react'
import CopyToClipboard from './copytoclipboard'

const App = React.createClass({
  render() {
    return (
      <CopyToClipboard className="btn" value="Copy">
        <p>How much where there's muck there's brass ah'll box thi ears. What's that when it's at ooam tell.</p>
      </CopyToClipboard>
    )
  }
})

module.exports = App