import React from 'react'

export default React.createClass ({
  propTypes:{
    word: React.PropTypes.string
  },

  render () {
    return(
      <div className="results">
        {this.props.word}
      </div>
    )
  }
})
