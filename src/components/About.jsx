import React from 'react'

export default React.createClass({
  render () {
    return (
      <div className="about">
        <h4>Welcome to the cobras thesaurus app.</h4>

        <hr />
        <footer>
          <h5>
            This app is brought to you by the Cobras of Nikau.
            <ul>
              <li>Joolz</li>
              <li>Kamon</li>
              <li>Sachin</li>
              <li>Justin</li>
            </ul>
          </h5>

          <h5>
            <em>Thesaurus service provided by <a href="http://words.bighugelabs.com/">words.bighugelabs.com</a></em>
          </h5>
        </footer>
      </div>
    )
  }
})
