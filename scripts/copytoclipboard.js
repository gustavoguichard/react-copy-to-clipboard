import React from 'react'

const CopyToClipboard = React.createClass({
  propTypes: {
    value: React.PropTypes.string.isRequired
  },
  handleClick(event) {
    const node = React.findDOMNode(this.refs.toCopy)
    const range = document.createRange()
    range.selectNode(node)
    window.getSelection().addRange(range)
    try {
      const copied = document.execCommand('copy')
      if(copied) alert("Successfully copied to your clipboard")
    } catch(err) {
      console.log(`Your browser doesn't support copying to clipboard, you'll need to do it manually =/`)
    }
    window.getSelection().removeAllRanges()
  },
  render() {
    return (
      <div>
        <span ref="toCopy">{this.props.children}</span>
        <button {...this.props} onClick={this.handleClick}>{this.props.value}</button>
      </div>
    )
  }
})

module.exports = CopyToClipboard