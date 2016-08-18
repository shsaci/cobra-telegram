import React from 'react'
import TimerMixin from 'react-timer-mixin'
import request from 'superagent'
import Woof from './Woof'
import SelectDogBox from './SelectDogBox'
import WoofForm from './WoofForm'

export default React.createClass({
  mixins: [TimerMixin],
  componentDidMount () {
    this.setInterval(() => {
      request
        .get('http://192.168.20.57:3000/api/woofs')
        .end((err, res) => {
          if (err) {
            console.error(err.message)
            return
          }
          this.setState({ woofs: res.body})
        })
      request
      .get('http://192.168.20.57:3000/api/dogs')
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          return
        }
        this.setState({dogs: res.body})
      })
    }, 500)
  },

  getInitialState () {
    return { woofs: [], dogs:[], selectedDogId: []}
  },

  onSelectChange (evt) {
    var options = evt.target.options
    var value = []
    for (var i = 0, l = options.length; i < l; i++) {
      if (options[i].selected) {
        value.push(Number(options[i].value))
      }
    }
    this.setState({
      selectedDogId: value
    })
  },

  render () {
    let woofs = this.state.woofs
    if (this.state.selectedDogId[0]) {
      woofs = this.state.woofs.filter((elem) => {
        return this.state.selectedDogId.find((id) => {
          return id === elem.dog_id
        })
      })
    }
    const woofElements = woofs.map((elem, i) => {
      return <Woof dogname={elem.dogname} content={elem.content} key={i}/>
  })
    return (
      <div className="container">
        <WoofForm dogs={this.state.dogs} />
        <img className="spinner" src="images/paw.png" />
        <SelectDogBox onChange={this.onSelectChange} dogs={this.state.dogs} />
        {woofElements}
      </div>
    )
  }
})
