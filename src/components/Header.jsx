import React from 'react'
import {Link} from 'react-router'

export default React.createClass({
  render () {
    return (
      <div>
        <header>
          <h1>find your word</h1>
          <Link to="/">Home</Link><br />
          <Link to="/about">About</Link>
        </header>
        {this.props.children}
    </div>
    )
  }
})
