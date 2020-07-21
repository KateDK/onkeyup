import React from 'react';
import './WisdomForm.css';
class WisdomForm extends React.Component{
  state={
    content:'',
    special: false,
    specialCount: 0,
  }

  handleKeyUp = (e) => {
    const char = e.charCode || e.keyCode;
    const {content,specialCount}= this.state;
    if(char >= 32 && char < 127 ){
      const key = e.key;
    }
    if(char === 8){
    }
  }

  render(){
    return(
      <div className='WisdomForm'>
        <textarea placeholder="Share your own wisdom:" onKeyUp={this.handleKeyUp}/>
      </div>
    )
  }
}

export default WisdomForm;
