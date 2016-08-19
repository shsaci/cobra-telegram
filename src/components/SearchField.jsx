import React from 'react'
import request from 'superagent'
import Synonym from './Synonym'

export default React.createClass({
  propTypes:{
    words: React.PropTypes.array.isRequired
  },

  getInitialState(){
    return {
      words: []
    }
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

  inputNode: null,

  handleInput(evt) {
    this.setState({content: this.inputNode.value})
  },

  render () {
    return(
      <div>

        <form>

          <input ref={(node) => this.inputNode = node} type="text" name="Word" placeholder="Enter your word here" onChange={this.handleInput} />

        <br />
          <input id = "btn" className="button button-primary red" type="button" value="Submit" onClick={this.handleRequest} />
        </form>

        <div>

          {this.state.words.map((word, i) => <Synonym word={word} key={i} />)}

        </div>
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
