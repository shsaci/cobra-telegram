import React from 'react'
import {Link} from 'react-router'

export default React.createClass({
  render () {
    return (
      <div>
        <header>
          <h1 className="head">Big Huge Cobra Thesaurus</h1>
        </header>
        <footer>
          <Link className='link' to="/">Home</Link> <div></div>
          <Link className='link' to="/about">About</Link>
          </footer>
        {this.props.children}
    </div>
    )
  }
})
