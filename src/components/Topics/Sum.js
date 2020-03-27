import React, {Component} from 'react'

class Sum extends Component {
constructor(){
    super()

    this.state={
        number1: 0,
        number2: 0,
        sum: null
    }
}

handleInputOne(event){
    this.setState({
        number1: +event.target.value
    })
}

handleInputTwo(event){
    this.setState({
        number2: +event.target.value
    })
}

handleClick(){
    this.setState({
        sum: this.state.number1 + this.state.number2
    })
}

render(){
    return(
        <div className='puzzleBox sumPb'>
            <h4>Sum</h4>
            <input className='inputLine' onChange={(event) => this.handleInputOne(event)}/>
            <input className='inputLine' onChange={(event) => this.handleInputTwo(event)}/>
           
            <button className='confirmationButton' onClick={() => this.handleClick()} >Click</button>
            <span className='resultsBox'>Sum:{this.state.sum}</span>
        </div>
    )
}

}

export default Sum

// import React, { Component } from 'react';

// export default class Sum extends Component {
//   constructor(){
//     super()

//     this.state = {
//       number1: 0,
//       number2: 0,
//       sum: null
//     }
//   }

//   handleInputOne(event){
//     this.setState({
//       number1: +event.target.value
//     })
//   }

//   handleInputTwo(event){
//     this.setState({
//       number2: +event.target.value
//     })
//   }

//   // handleClick(){

//   // }

//   handleClick = () => {
//     // This method should update the value of sum.
//     // This method should solve the toy problem.

//     this.setState({
//       sum: this.state.number1 + this.state.number2
//     })
//   }

//   render() {
//     console.log(typeof this.state.number1)
//     console.log(typeof this.state.number2)
//     console.log(typeof this.state.sum)
//     return (
//       <div className="puzzleBox sumPB">
//         <h4>Sum</h4>
//         <input className="inputLine" onChange={(event) => this.handleInputOne(event)} />
//         <input className="inputLine" onChange={(event) => this.handleInputTwo(event)} />
//         <button className="confirmationButton" onClick={this.handleClick} >Click Me!</button>
//     <span className="resultsBox">Sum: {this.state.sum}</span>
//       </div>
//     )
//   }
// }