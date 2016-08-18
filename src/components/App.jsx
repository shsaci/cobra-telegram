import React from 'react'
import request from 'superagent'
import WOTD from './WOTD'
import ApiResponse from './ApiResponse'
import SearchField from './SearchField'

export default React.createClass({
  componentDidMount () {
      request
        .get('http://words.bighugelabs.com/api/2/99b9e9de9f7b91269a3fd82d037b9068/word/json')
        .end((err, res) => {
          if (err) {
            console.error(err.message)
            return
          }
          this.setState({ words: res.body})
        })
      },

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
