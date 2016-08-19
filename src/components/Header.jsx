import React from 'react'
import {Link} from 'react-router'

export default React.createClass({
  render () {
    return (
      <div>
        <header>
          <h1 className="head">Big Huge Cobra Thesaurus</h1>
          <Link className='link' to="/about">About</Link>
        </header>
        {this.props.children}
    </div>
    )
  }
})
