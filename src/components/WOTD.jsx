import React from 'react'

const WOTD = ({word, definition}) => (
  <div className="WOTD">
    <h3>{word}</h3>
    <p>{definition}</p>
  </div>
)
WOTD.propTypes = {
  word: React.PropTypes.string.isRequired,
  definition: React.PropTypes.string.isRequired
}

export default WOTD

// export default React.createClass({
//   propTypes: {
//     dogname: React.PropTypes.string.isRequired,
//     content: React.PropTypes.string.isRequired
//   },
//   render () {
//     return (
//       <div className="woof">
//         <h3>{this.props.dogname}</h3>
//         <p>{this.props.content}</p>
//       </div>
//     )
//   }
// })
