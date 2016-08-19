import React from 'react'

export default React.createClass ({
  propTypes:{
    word: React.PropTypes.string
  },

  render () {
    return(
      <div>
        {this.props.word}
      </div>
    )
  }
})
