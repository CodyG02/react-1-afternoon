import React, {Component} from 'react'

class FilterObject extends Component {
    render(){
        return(
            <div className='puzzleBox filterObjectPB'></div>
            <h4>Filter Object</h4>
            <span className='puzzleText'></span>
            <input className='inputLine'/>
            <button className='confirmationButton'></button>
            <span className='resultsBox filterObjectRB'></span>
        )
    }
}

export default FilterObject