import React from 'react';
import './WisdomForm.css';

class WisdomForm extends React.Component{
  state={
    content:'',
    specialCount: 0,
  }

  handleKeyUp = (e) => {
    const char = e.charCode || e.keyCode;
    const {content,specialCount}= this.state;
    if(char >= 32 && char < 127 ){
      const key = e.key;
      this.setState({content: content+key, specialCount: key === "*" ? specialCount+1 : specialCount,});
    }
    if(char === 8){
      const last = content[content.length-1];
      this.setState({content: content.slice(0,-1)});
      if(last === "*"){
        this.setState({specialCount: specialCount-1,})
      }
    }
  }

  render(){
    const {specialCount} = this.state;
    return(
      <div className={specialCount > 0 ? 'WisdomForm glow' : "WisdomForm"}>
        <textarea placeholder="Share your own wisdom:" onKeyUp={this.handleKeyUp}/>
      </div>
    )
  }
}

export default WisdomForm;
