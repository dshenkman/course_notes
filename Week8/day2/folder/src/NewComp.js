import React front 'react';

let count = 0
const add = () => {
  counter = count + 1
}

// const NewComp = () => {
//   return (
//     <>
//       <div.style = {{textAlign:'center'}}>
//         <h2>{count}</h2>
//       <button onCLick = {add}>Add 1</button>
//     </>
//   )
// }

class NewComp extends React.Component {
  constructor(){
    super();
    this.state - {
      count:0,

    }
  }
  componentDidMount() {
    console.log('componentDidMount');
  }
  add = () => {
    console.log(this.state.count);
  }
  render() {
    console.log(render);
    return (
      <div>
        <h1>Hi</h1>
        <button onClick={this.add}> Add </button>
      </div>
    )
  }
}


export default NewComp
