// import React from 'react'
//
// export default class SelectDogBox extends React.Component {
//   // constructor(props) {
//   //   super(props)
//   //   this.state = {value: ''}
//   // }
//
//   createOptions(elem, i) {
//     return <option value={elem.id} key={i}>{elem.name}</option>
//   }
//
//   onChangeClick(evt) {
//     console.log(this)
//     this.props.onChange(evt)
//   }
//
//   render() {
//     const options = this.props.dogs.map(this.createOptions)
//     return (
//       <select multiple onChange={this.onChangeClick.bind(this)} className="dogbox">
//         <option value={[]}>Select your Doge</option>
//         {options}
//       </select>
//     )
//   }
// }
//
// SelectDogBox.propTypes = {
//   dogs: React.PropTypes.array.isRequired,
//   onChange: React.PropTypes.func.isRequired
// }

// export default React.createClass({
//   propTypes:{
//     dogs: React.PropTypes.array.isRequired,
//     onChange: React.PropTypes.func.isRequired
//   },
//
//   getInitialState() {
//     return {value: ''}
//   },
//   render() {
//     const options = this.props.dogs.map((elem, i) => {
//       return <option value={elem.id} key={i}>{elem.name}</option>
//     })
//     return (
//       <select multiple onChange={this.props.onChange} className="dogbox">
//           <option value={[]}>Select your Doge</option>
//           {options}
//       </select>
//     )
//   }
// })
