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
      this.setState({content: content+key, specialCount: key === "*" ? specialCount+1 : specialCount, special: specialCount+1 > 0});
    }
    if(char === 8){
      const last = content[content.length-1];
      this.setState({content: content.slice(0,-1)});
      if(last === "*"){
        this.setState({specialCount: specialCount-1,special: specialCount-1 > 0})
      }
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
