import React from 'react'
import Divider from 
  'material-ui/lib/divider'

export default React.createClass({
  render() {
    const { index, length } = this.props

    if (index < length - 1) {
      return (
        <Divider {...this.props} 
          inset={true}
          style={{marginLeft:0}}
        />
      )
    } else {
      return null
    }
  }
})