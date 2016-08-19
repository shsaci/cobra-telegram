import React from 'react'
import request from 'superagent'

export default React.createClass({
  propTypes:{
    words: React.PropTypes.array.isRequired
  },

  getInitialState(){
    return {
      words: []
    }
  },

// REVISE THIS
  // handleOnClick(evt) {
  //   var options = evt.target.options
  //   console.log(evt.target.value)
  //   console.log(options)
  //   var value = []
  //   for (var i = 0, l = options.length; i < l; i++) {
  //     if (options[i].selected) {
  //       value.push({noun: options[i].text, verb: options[i].value})
  //     }
  //   }
  //   this.setState({noun:value[0].noun, verb: value[0].verb})
  // },

  inputNode: null,

  handleInput(evt) {
    this.setState({content: this.inputNode.value})
  },

  handleRequest (evt) {
    request
      .get(`http://words.bighugelabs.com/api/2/99b9e9de9f7b91269a3fd82d037b9068/${this.inputNode.value}/json`)
      .end ((err, res) => {
      if (err) {
        console.error(err.message)
        return
      }
      this.setState({words: JSON.parse(res.text).noun.syn})
      })
  },

  render () {
    return(
      <div>
        <form>
          <input ref={(node) => this.inputNode = node} type="text" name="Word" placeholder="Enter your word here" onChange={this.handleInput} /><br />
          <input type="button" value="Submit" onClick={this.handleRequest} />
        </form>
        <div>{this.state.words.map(word => word)}</div>
      </div>
    )
  }
})

// handlePost(evt) {
//   console.log('getting in there')
//   request
//   .post('http://192.168.20.57:3000/api/woofs')
//   .send({"dog_id":this.state.dog_id,"content":this.state.content})
//   .end((err, res) => {
//     if (err) {
//       console.log(err.message)
//       return
//     }
//     console.log(res)
//   })
//  },
