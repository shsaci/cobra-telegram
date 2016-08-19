import React from 'react'
import request from 'superagent'
import SearchField from './SearchField'

export default React.createClass({
  getInitialState () {
    return { words: []}
  },

  render () {
    const wordElements = this.state.words.map((elem, i) => {
      return <words noun={elem.noun} verb={elem.verb} key={i}/>
  })
    return (
      <div className="container">
        <SearchField words={this.state.words} />
        {wordElements}
      </div>
    )
  }
})
