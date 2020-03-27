import React, {Component} from 'react'

class Palindrome extends Component {
    constructor(){
        super()

        this.state={
            userInput: '',
            palindrome: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        this.setState({userInput: event.target.value})
    }
    


    handleClick(){
        // This method should update the value of palindrome.
        // This method should solve the toy problem.
    
        let userInputArr = this.state.userInput.split('');
        console.log(userInputArr);
    
        let userInputArrReversed = userInputArr.reverse();
        console.log(userInputArrReversed)
        
        let userInputReversedJoined = userInputArrReversed.join('');
        console.log(userInputReversedJoined)
    
        
        if( userInputReversedJoined === this.state.userInput ){
          this.setState({
            palindrome: 'true'
          })
        } else {
          this.setState({
            palindrome: 'false'
          })
        }
      }


    render(){
        return(
            <div className='puzzleBox filterStringPB'>
                <h4 >Palindrome</h4>
                <input className='inputLine' onChange={(event)=> this.handleChange(event)}/>
                <button className='confirmationButton' onClick={() => this.handleClick()}>Cllick Me</button>
                <span className='resultBox'>Palindrome: {this.state.palindrome}</span>
            </div>
        )
    }
}

export default Palindrome