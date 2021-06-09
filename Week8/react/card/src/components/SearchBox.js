import React from 'react'

// const SearchBox = (props) => {
//   const {handleChange, handleClick} = props;
//   return (
//     <div>
//       <input
//       className = 'pa3 bs b--green bg-lightest-blue'
//       placeholder="Search..."
//       type='search'
//       onChange ={handleChange} />
//       <button className ="pa3 ba b-green bg-lightest-blue" onClick = {handleClick}>Search</button>
//     </div>
//   )
// }

class SearchBox extends React.Component {
  constructor() {
    super();
    this.state = {
      search:''
    }
  }

  handleChange = (event) => {
    console.log(event.target.value)
      this.setState({search:event.target.value})
  }

  render () {
    const {handleClick} = this.props;
    return (
      <div>
        <input
        className = 'pa3 bs b--green bg-lightest-blue'
        placeholder="Search..."
        type='search'
        onChange ={this.handleChange} />
        <button className ="pa3 ba b-green bg-lightest-blue" onClick = {() => handleClick(this.state.search)}>Search</button>
      </div>
    )

  }

}


export default SearchBox
