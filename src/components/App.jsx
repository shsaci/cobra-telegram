import React from 'react'
import request from 'superagent'
import WOTD from './WOTD'
import ApiResponse from './ApiResponse'
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

// onSelectChange (evt) {
//   var options = evt.target.options
//   var value = []
//   for (var i = 0, l = options.length; i < l; i++) {
//     if (options[i].selected) {
//       value.push(Number(options[i].value))
//     }
//   }
//   this.setState({
//     selectedDogId: value
//   })
// },
