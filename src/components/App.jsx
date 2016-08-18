import React from 'react'
import TimerMixin from 'react-timer-mixin'
import request from 'superagent'

import Header from './Header'

export default React.createClass({
  mixins: [TimerMixin],
  componentDidMount () {
    // this.setInterval(() => {
    request
        .get('http://127.0.0.1:3000/')
        .end((err, res) => {
          if (err) {
            console.error(err.message)
            return
          }
          console.log(res.body)
        })
    // }, 3000)
  },

  getInitialState () {
    return { woofs: [] }
  },

  render () {
    return (
      <div className='app-container'>
        <Header />
      </div>
    )
  }
})
