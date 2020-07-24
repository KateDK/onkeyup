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
      this.setState({content: e.target.value, specialCount: key === "*" ? specialCount+1 : specialCount});
    }
    if(char === 8){
      const selectionStart = this.input.selectionStart
      const currentSlct = content[selectionStart];
      if(currentSlct === "*"){
        this.setState({specialCount: specialCount-1,})
      }
      this.setState({content: e.target.value});
    }
  }

  render(){
    const {specialCount,content} = this.state;
    return(
      <div className={specialCount > 0 ? 'WisdomForm glow' : "WisdomForm"}>
        <textarea placeholder="Share your own wisdom:" onKeyUp={this.handleKeyUp} vlue={content} ref={el=>this.input=el}/>
      </div>
    )
  }
}

export default WisdomForm;
