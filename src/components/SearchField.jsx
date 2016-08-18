import React from 'react'
import request from 'superagent'

export default React.createClass({
  propTypes:{
    words: React.PropTypes.array.isRequired
  },

  getInitialState(){
    return {noun:null, verb:null, syn:null}
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

  render () {
    const options = this.props.words.map((elem, i) => {
      return <option value={elem.id} key={i}>{elem.name} </option>
    })
    return(
      <div>
        // <select onChange={this.handleOnClick}>
        //   {options}
        // </select>
        <form>
          <input ref={(node) => this.inputNode = node} type="text" name="Word" placeholder="Enter your word here" onChange={this.handleInput} /><br />
          <input type="button" value="Submit" onClick={this.handlePost} />
        </form>
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
