import React from 'react';

import './App.css';
import CardsList from './components/CardsList';
import SearchBox from './components/SearchBox';
import 'tachyons';
import axios from 'axios'

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      arr: [],
      searchText: '',

    }
  }
  // componentDidMount(){
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //   .then(res => res.json())
  //   .then(data => {
  //     // this.state.arr = data
  //     // console.log(this.state.arr);
  //     this.setState({arr:data})
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   })
  // }

  //  componentDidMount(){
  //   axios.get('https://jsonplaceholder.typicode.com/users')
  //   .then(res => res.data)
  //   .then(data => {
  //     this.setState({arr:data})
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   })
  // }

  async componentDidMount(){

    try {
      let res = await axios.get('https://jsonplaceholder.typicode.com/users');
      let data =  res.data;
      this.setState({arr:data})

    } catch (e) {
      console.log(e);
    }

 }

  handleChange = (event) => {
    // console.log(event.target.value);
    // this.setState({ searchText:event.target.value })
    this.state.searchText = event.target.value;
  }

  handleClick = (value) => {
    console.log("hi");
    this.setState({searchText:this.state.searchText})

  }


  render(){
    const {arr, searchText} = this.state;
    const filteredRobots = arr.filter(item=> {
      return item.name.toLowerCase().includes(searchText.toLowerCase())

    })


    return (
      <div className='tc'>
        <SearchBox handleClick={this.handleClick}/>
        <CardsList robots={filteredRobots} />
      </div>
    );
  }

}

export default App;
